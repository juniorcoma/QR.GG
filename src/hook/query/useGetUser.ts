import { authorizationClient } from '@/service/axios';
import { useQuery } from '@tanstack/react-query';

export default function useGetUser() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await authorizationClient.get('/api/v1/users');
      return response.data;
    },
  });
}
