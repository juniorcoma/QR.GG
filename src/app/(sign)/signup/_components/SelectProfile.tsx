'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

export default function SelectProfileContainer<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...controllerProps }: UseControllerProps<TFieldValues, TName>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(controllerProps);
  const [currentProfile, setCurrentProfile] = useState('');
  useEffect(() => {
    onChange(currentProfile);
  }, [currentProfile]);

  return (
    <div>
      <div className="mb-2">
        {currentProfile ? (
          <Image src={currentProfile} className="rounded-[50%]" width={60} height={60} alt="프로필 이미지" />
        ) : (
          <div className="w-[6rem] h-[6rem] bg-slate-500" />
        )}
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SelectProfile setCurrentProfile={setCurrentProfile}></SelectProfile>
        </Suspense>
      </div>
      <span className="inline-block text-[1.2rem] text-red-600 mt-1 min-h-5">{error?.message}</span>
    </div>
  );
}

interface SelectProfileProps {
  setCurrentProfile: React.Dispatch<React.SetStateAction<string>>;
}

function SelectProfile({ setCurrentProfile }: SelectProfileProps) {
  const { data } = useSuspenseQuery({
    queryKey: ['champions'],
    queryFn: async () => {
      const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.13.1/data/ko_KR/champion.json');
      return response.data;
    },
    staleTime: Infinity,
    select: data => data.data,
  });
  const handleClick = (champ: string) => {
    setCurrentProfile(`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/${champ}.png`);
  };
  return (
    <div className="h-[25rem] overflow-y-auto bg-white p-4 rounded-lg">
      <ul className="grid grid-cols-10 gap-1 place-items-center">
        {Object.entries(data)
          .sort((a, b) => {
            if (a[1].name > b[1].name) return 1;
            else if (a[1].name < b[1].name) return -1;
            return 0;
          })
          .map((champion: any) => (
            <li key={champion[0]}>
              <button type="button" onClick={() => handleClick(champion[0])}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/${champion[0]}.png`}
                  width={50}
                  height={50}
                  alt={`${champion[1].name} 이미지`}
                  className="rounded-[50%]"
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
