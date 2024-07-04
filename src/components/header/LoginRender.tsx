'use client';

import useGetUser from '@/hook/query/useGetUser';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginRenderContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuth();

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  if (isAuthenticated) {
    return <Profile setIsAuthenticated={setIsAuthenticated} />;
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

function Profile({ setIsAuthenticated }) {
  const { data } = useGetUser();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    alert('로그아웃 되었습니다');
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
