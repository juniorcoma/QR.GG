'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function OauthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenValue = searchParams.get('token') as string;
  const status = searchParams.get('status');
  localStorage.setItem('token', tokenValue);
  if (status === 'pending') {
    return router.push('/signup');
  } else {
    return router.push('/');
  }
}
