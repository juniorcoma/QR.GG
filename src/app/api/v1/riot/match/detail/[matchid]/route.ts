import { riotRegionalHost } from '@/service/axios';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface Params {
  matchid: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { matchid } = context.params;
  try {
    const { data } = await riotRegionalHost.get(`/lol/match/v5/matches/${matchid}`);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
  }
}
