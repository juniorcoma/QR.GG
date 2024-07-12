import { dragon_request } from '@/service/dragon.api';
import { riot_request } from '@/service/riot.api';
import { championImgUrl, summonerProfileIconUrl } from '@/utils/getDataImgUrl';
import Image from 'next/image';

interface SummonerProfileProps {
  profileIconId: number;
  summonerLevel: number;
  gameName: string;
  tagLine: string;
  puuid: string;
}

export default async function SummonerProfile({
  profileIconId,
  summonerLevel,
  gameName,
  tagLine,
  puuid,
}: SummonerProfileProps) {
  const profileIconImgUrl = summonerProfileIconUrl(profileIconId);
  return (
    <div className="flex gap-9 px-8">
      <div className="w-[10rem] h-[10rem] relative">
        <Image src={profileIconImgUrl} fill className="rounded-2xl border border-color-main-03" alt="프로필 이미지" />
        <span className="px-2 py-1 bg-color-main-01 z-50 text-color-content-09 absolute rounded-lg text-[1.4rem] font-[700] bottom-[-0.9rem] left-[50%] translate-x-[-50%]">
          {summonerLevel}
        </span>
      </div>
      <div className="py-2 flex flex-col justify-between">
        <h1 className="text-[3.2rem] font-[700] text-color-main-01">
          {gameName} <span className="text-[2.8rem] text-color-content-02">#{tagLine}</span>
        </h1>
        <SummonerChampionMastery puuid={puuid} />
      </div>
    </div>
  );
}
interface SummonerChampionMasteryProps {
  puuid: string;
}

async function SummonerChampionMastery({ puuid }: SummonerChampionMasteryProps) {
  const championMastery = await riot_request.getSummonerChampionMastery(puuid);
  const champoionList = await dragon_request.getChampions('values');
  const matchChampList = championMastery.map((item: any) => {
    const matchItem: any = champoionList?.find((value: any) => Number(value.key) === item.championId);
    return { ...item, matchItem };
  });

  return (
    <div className="flex gap-2">
      {matchChampList.map((item: any, i: number) => (
        <div key={item.championId} className="flex flex-col gap-1">
          <div className="text-center text-[1.4rem] font-[900]">{i + 1}</div>
          <div className="w-[5rem] h-[5rem] relative rounded-[50%]">
            <Image
              className="rounded-[100%] border border-color-white"
              src={championImgUrl('square', item.matchItem.id)}
              fill
              alt={`${item.matchItem.name} 이미지`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
