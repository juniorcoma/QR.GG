import { riotPlatformHost } from '@/service/axios';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface Params {
  puuid: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { puuid } = context.params;
  try {
    const { data } = await riotPlatformHost.get(`/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
  }
}
