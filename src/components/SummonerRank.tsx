import { client } from '@/service/axios';
import Image from 'next/image';

interface SummonerRankProps {
  summonerId: string;
}

export default async function SummonerRank({ summonerId }: SummonerRankProps) {
  const summonerRank = await getSummonerRank({ summonerId });
  console.log(summonerRank);
  return (
    <div className="px-4 py-3 bg-white rounded-2xl flex gap-5">
      {summonerRank.map((item: any) => (
        <div key={item.leagueId} className="flex-1 first:border-r border-gray-500">
          <p className="text-[1.2rem] font-[700] mb-6">
            {item.queueType === 'RANKED_SOLO_5x5' ? '솔로랭크' : '자유랭크'}
          </p>
          <div className="flex gap-4">
            <div className="rounded-[50%] bg-gray-500 p-3">
              <Image
                src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/${item.tier.toLowerCase()}.png`}
                width={60}
                height={60}
                alt="티어 이미지"
              />
            </div>
            <div>
              <h3 className="text-[1.8rem] font-[700] mb-2">
                {`${item.tier[0]}${item.tier.slice(1).toLowerCase()}`}{' '}
                <span className="text-gray-500">{item.rank}</span>
              </h3>
              <span className="text-[1.4rem] font-[700] px-4 py-1 bg-primary-300 text-white rounded-lg inline-block mb-4">
                {item.leaguePoints}LP
              </span>
              <p className="text-[1.4rem] font-[700]">
                {item.wins}승 {item.losses}패 {Math.floor((item.wins / (item.wins + item.losses)) * 100)}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const getSummonerRank = async ({ summonerId }: { summonerId: string }) => {
  const { data: rankData } = await client.get(`/riot/league/${summonerId}`);
  return rankData;
};
