'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SummonerSearchBar() {
  const [value, setValue] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    const pushUrl = value.replace('#', '-');
    router.push(`/summoners/${pushUrl}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full rounded-2xl relative px-4 py-6 border border-color-bg-07 text-color-content-03 text-[1.8rem]`}
    >
      <div className="flex-1">
        <input
          type="text"
          id="summoner-search-input"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="outline-none w-full h-full bg-transparent text-white"
        />
        <label
          htmlFor="summoner-search-input"
          className={`font-[500] absolute top-[50%] translate-y-[-40%] left-4 ${value && 'hidden'}`}
        >
          <span className="text-[#cdcdcd]">플레이어이름 + </span>
          <span className="rounded-lg font-[500] text-color-main-01">#KR1</span>
        </label>
      </div>
      <button type="submit" className="font-[900] text-[2.4rem] translate-y-1 text-color-main-01">
        .GG
      </button>
    </form>
  );
}
