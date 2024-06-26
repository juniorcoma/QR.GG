import { riotRegionalHost } from '@/service/axios';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface Params {
  gamename: string;
  tagid: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { gamename, tagid } = context.params;
  try {
    const { data } = await riotRegionalHost.get(`/riot/account/v1/accounts/by-riot-id/${gamename}/${tagid}`);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.json({ error: err.message, status: err.status }, { status: err.status });
    }
  }
}
