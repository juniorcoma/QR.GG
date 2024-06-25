import connectToMongoDB from '@/utils/db/dbConnection';
import { NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '@/models/user';

interface UserPayload extends JwtPayload {
  userId: string;
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = authHeader.startsWith('Bearer') ? authHeader.substring(7) : null;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as UserPayload;
  try {
    await connectToMongoDB();
    const userData = await User.findById(userId);
    return NextResponse.json(userData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: '에러가 발생했습니다. 다시 시도해 주세요' }, { status: 500 });
  }
}
