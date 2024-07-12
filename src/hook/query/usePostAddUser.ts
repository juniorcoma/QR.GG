import { user_request } from '@/service/user.api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function usePostAddUser() {
  const router = useRouter();
  return useMutation({
    mutationFn: user_request.postSignup,
    onSuccess() {
      alert('회원가입에 성공하였습니다');
      router.push('/');
    },
    onError(err) {
      console.log(err);
    },
  });
}
