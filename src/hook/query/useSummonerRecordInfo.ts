import { riot_request } from '@/service/riot.api';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

export default function useSummonerRecordInfo(puuid: string) {
  return useSuspenseInfiniteQuery({
    queryKey: ['summonerRecordInfo', puuid],
    queryFn: async ({ pageParam = 0 }) => await riot_request.getSummonerGameDetail({ pageParam, puuid }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: any, pages) => pages.length,
    staleTime: 1000 * 60 * 10,
  });
}
