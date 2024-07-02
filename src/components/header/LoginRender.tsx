'use client';

import useGetUser from '@/hook/query/useGetUser';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginRenderContainer() {
  const token = localStorage.getItem('token');
  if (token) {
    return <Profile />;
  } else {
    return <Login />;
  }
}

function Login() {
  return (
    <Link href="/signin" className="inline-block py-1 px-3 text-[1.4rem] text-white bg-primary-400 rounded">
      <span>Sign in</span>
    </Link>
  );
}

function Profile() {
  const { data } = useGetUser();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    router.refresh();
  };
  return (
    <div className="flex items-center gap-2 text-[1.2rem] font-[600]">
      <Image className="rounded-[50%]" src={data?.profile_img_url} width={30} height={30} alt="프로필 이미지" />
      <span>{`${data?.name} 님`}</span>
      <button onClick={handleLogout} type="button" className="px-3 py-2 bg-primary-700 text-white rounded-lg">
        로그아웃
      </button>
    </div>
  );
}
