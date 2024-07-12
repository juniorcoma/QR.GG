import { dragon_request } from '@/service/dragon.api';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useGetSummonerSpell() {
  return useSuspenseQuery({
    queryKey: ['summonerSpell'],
    queryFn: async () => dragon_request.getSummonerSpell(),
  });
}
