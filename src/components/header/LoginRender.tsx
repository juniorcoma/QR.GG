'use client';

import SigninIcon from '@/assets/icons/SigninIcon';
import Link from 'next/link';
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
    return (
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }}
        className="relative"
      >
        <span className="inline-block p-2 border border-color-main-01 rounded-[50%]">
          <SigninIcon isLogin />
        </span>
        <span className="absolute text-color-main-01 text-[1.2rem] bottom-[-10px] left-[50%] translate-x-[-50%]">
          ON
        </span>
      </button>
    );
  } else {
    return (
      <Link href="/signin" className="relative">
        <span className="inline-block p-2 bg-color-bg-06 rounded-[50%]">
          <SigninIcon />
        </span>
        <span className="absolute text-color-bg-06 text-[1.2rem] bottom-[-10px] left-[50%] translate-x-[-50%]">
          OFF
        </span>
      </Link>
    );
  }
}
