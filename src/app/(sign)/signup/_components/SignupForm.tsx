'use client';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import { SignupDataType } from '@/types/api';
import usePostAddUser from '@/hook/query/usePostAddUser';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDataType>({ mode: 'onChange' });
  const mutation = usePostAddUser();
  const handleOnSubmit = ({ name, riot_game_name, riot_tag_id }: SignupDataType) => {
    const requestData: SignupDataType = {
      name,
      riot_game_name,
      riot_tag_id,
    };
    mutation.mutate(requestData);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col gap-12 mb-[40vh]">
        <Input
          labelText="닉네임을 정해주세요"
          id="name"
          {...register('name', { required: '닉네임을 입력해주세요' })}
          error={errors.name}
          placeholder="닉네임을 적어주세요"
        />
        <Input
          labelText="라이엇 이름을 적어주세요"
          id="riot_name"
          {...register('riot_game_name', { required: '라이엇 이름을 적어주세요' })}
          error={errors.riot_game_name}
          placeholder="롤 닉네임을 적어주세요"
        />
        <Input
          labelText="라이엇 태그를 적어주세요"
          id="riot_tag"
          {...register('riot_tag_id', { required: '라이엇 태그를 적어주세요' })}
          error={errors.riot_tag_id}
          placeholder="#은 빼고 적어주세요"
        />
      </div>
      <Button type="submit" disabled={false}>
        회원가입
      </Button>
    </form>
  );
}
