import { riotRegionalHost } from '@/service/axios';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface Params {
  puuid: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const requestUrlParams = new URL(request.url).searchParams;
  const startValue = requestUrlParams.get('start') || '0';
  const { puuid } = context.params;
  try {
    const { data } = await riotRegionalHost.get(`/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${startValue}`);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
  }
}
