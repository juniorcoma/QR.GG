import User from '@/models/user';
import connectToMongoDB from '@/utils/db/dbConnection';
import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams;
  const code = url.get('code');
  try {
    const { data } = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_REST_API_KEY,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    const { data: user } = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    await connectToMongoDB();
    const checkUser = await User.findOne({ user_id: user.id });

    if (checkUser) {
      //로그인
      const token = jwt.sign({ userId: checkUser._id }, process.env.JWT_SECRET_KEY as string);
      return NextResponse.redirect(`${process.env.FRONTEND_URL}/oauth/success?token=${token}`);
    } else {
      //회원가입
      const newUser = new User({
        user_id: user.id,
      });

      await newUser.save();
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY as string);
      return NextResponse.redirect(`${process.env.FRONTEND_URL}/oauth/success?token=${token}`);
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.redirect(`${process.env.FRONTEND_URL}/oauth/success?message=${err.message}`);
    } else {
      return NextResponse.redirect(`${process.env.FRONTEND_URL}/oauth/success?message=server error`);
    }
  }
}
