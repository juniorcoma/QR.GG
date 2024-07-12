import { dragon_request } from '@/service/dragon.api';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useGetRunes() {
  return useSuspenseQuery({
    queryKey: ['runes'],
    queryFn: async () => dragon_request.getRunes(),
  });
}
