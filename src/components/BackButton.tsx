'use client';
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className="flex gap-1 items-center text-[1.6rem] mb-9">
      <span>
        <LeftArrowIcon />
      </span>
      <span className="text-color-content-03">돌아가기</span>
    </button>
  );
}
