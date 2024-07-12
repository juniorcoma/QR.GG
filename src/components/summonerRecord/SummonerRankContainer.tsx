import { ROMAN_TO_ARABIC_NUM } from '@/constant';
import { TIER_IMG_URL } from '@/constant/riotData.url';
import { riot_request } from '@/service/riot.api';
import Image from 'next/image';

interface SummonerRankContainerProps {
  summonerId: string;
}

export default async function SummonerRankContainer({ summonerId }: SummonerRankContainerProps) {
  const [soloRank, freeRank] = await riot_request.getSummonerRank(summonerId);
  return (
    <div className="p-6 rounded-[2.4rem] bg-color-bg-03">
      <div className="flex">
        <div className="flex-1">
          <p className="text-[1.6rem] font-[400] mb-4">솔로랭크</p>
          <SummonerRank rankData={soloRank} />
        </div>
        <div className="flex-1">
          <p className="text-[1.6rem] font-[400] mb-4">자유랭크</p>
          <SummonerRank rankData={freeRank} />
        </div>
      </div>
    </div>
  );
}

interface SummonerRankProps {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: 'I' | 'II' | 'III' | 'IV';
  summonerId: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

function SummonerRank({ rankData }: { rankData: SummonerRankProps | undefined }) {
  if (!rankData) {
    return (
      <div className="flex gap-5">
        <div className="relative w-[10rem] h-[10rem] bg-color-bg-04 rounded-[100%]">
          <Image src={`${TIER_IMG_URL}/unranked.png`} fill alt="언랭 이미지" />
        </div>
        <div className="pt-4">
          <h3 className="text-[2.4rem] text-color-content-04">Unranked</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      <div className="relative w-[10rem] h-[10rem] bg-color-bg-04 flex justify-center items-center rounded-[100%]">
        <Image src={`${TIER_IMG_URL}/${rankData.tier.toLowerCase()}.png`} width={80} height={80} alt="언랭 이미지" />
      </div>
      <div className="pt-4 flex flex-col gap-3">
        <h3 className="text-[2.4rem] font-[700]">
          {rankData.tier[0] + rankData.tier.slice(1).toLowerCase()}
          <span className="ml-4">{ROMAN_TO_ARABIC_NUM[rankData.rank]}</span>
        </h3>
        <p className="text-[1.6rem] text-color-content-06">{rankData.leaguePoints}P</p>
        <p className="text-[1.6rem] text-color-content-03">
          {rankData.wins}승 {rankData.losses}패 승률 :{' '}
          <span className="text-color-main-04">
            {Math.floor((rankData.wins / (rankData.wins + rankData.losses)) * 100)}%
          </span>
        </p>
      </div>
    </div>
  );
}
