'use client';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import SelectProfileContainer from './SelectProfile';
import { useMutation } from '@tanstack/react-query';
import { authorizationClient } from '@/service/axios';
import { useRouter } from 'next/navigation';

interface requestDataType {
  name: string;
  riot_game_name: string;
  riot_tag_id: string;
  profile_img_url: string;
}

export default function SignupForm() {
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nickname: '',
      riotname: '',
      riottag: '',
      userProfile: '',
    },
    mode: 'onChange',
  });
  const mutation = useMutation({
    mutationFn: async (data: requestDataType) => {
      const response = await authorizationClient.post('/api/v1/users', data);
      return response;
    },
    onSuccess() {
      alert('회원가입에 성공하였습니다');
      router.push('/');
    },
  });
  const handleOnSubmit = (data: any) => {
    const requestData = {
      name: data.nickname,
      riot_game_name: data.riotname,
      riot_tag_id: data.riottag,
      profile_img_url: data.userProfile,
    };
    mutation.mutate(requestData);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col gap-4 mb-8">
        <Input
          labelText="닉네임을 적어주세요"
          id="nickname"
          type="text"
          placeholder="5자이내로 적어주세요"
          name="nickname"
          focus
          control={control}
          rules={{ required: '닉네임을 적어주세요', maxLength: 5 }}
        />
        <Input
          labelText="라이엇 이름을 적어주세요"
          id="riotname"
          type="text"
          placeholder="롤 닉네임을 작성해주시면 됩니다"
          name="riotname"
          control={control}
          rules={{ required: '라이엇 이름을 적어주세요' }}
        />
        <Input
          labelText="라이엇 태그를 적어주세요"
          id="riottag"
          type="text"
          placeholder="# 빼고 작성해주세요"
          name="riottag"
          control={control}
          rules={{ required: '라이엇 태그를 적어주세요' }}
        />
      </div>
      <div className="mb-8">
        <p className="text-[1.4rem] font-[500] mb-4">프로필 사진을 정해주세요</p>
        <SelectProfileContainer
          control={control}
          name="userProfile"
          rules={{ required: '프로플 사진을 정해주세요!' }}
        />
      </div>
      <button type="submit" className="w-full px-3 py-4 bg-primary-700 text-white text-[1.8rem] font-[700] rounded-md">
        회원가입
      </button>
    </form>
  );
}
