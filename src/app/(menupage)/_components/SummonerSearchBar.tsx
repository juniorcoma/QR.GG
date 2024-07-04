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
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex z-50 bg-white w-full rounded-xl relative px-4 py-4 border border-primary-700"
      >
        <div className="flex-1">
          <input
            type="text"
            id="summoner-search-bar"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="text-[1.6rem] outline-none w-full h-full"
          />
          <label
            htmlFor="summoner-search-bar"
            className={`text-[1.6rem] font-[500] absolute top-[50%] translate-y-[-50%] left-4 ${value && 'hidden'}`}
          >
            <span className="text-[#cdcdcd]">플레이어이름 + </span>
            <span className="text-white bg-primary-500 px-[6px] py-[2px] rounded-lg font-[500]">#KR1</span>
          </label>
        </div>
        <button type="submit" className="font-[900] text-[2.4rem] text-primary-700 translate-y-1">
          .GG
        </button>
      </form>
      {/* <span className="absolute text-[8.4rem] font-[900] text-primary-700 top-[-6.7rem] left-[10%]">Q</span> */}
      {/* <span className="absolute text-[8.4rem] font-[900] text-primary-700 top-[-6.7rem] left-[30%]">R</span> */}
      {/* <span className="absolute text-[8.4rem] font-[900] text-primary-700 top-[-6.7rem] right-[10%]">G</span> */}
      {/* <span className="absolute text-[8.4rem] font-[900] text-primary-700 top-[-6.7rem] right-[30%]">G</span> */}
    </div>
  );
}
