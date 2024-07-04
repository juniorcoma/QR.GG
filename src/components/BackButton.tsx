'use client';
import BackIcon from '@/assets/icons/backIcon.svg';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className="flex gap-1 items-center text-[1.6rem]">
      <Image src={BackIcon} width={24} height={24} alt="돌아아기 아이콘" />
      <span>돌아가기</span>
    </button>
  );
}
