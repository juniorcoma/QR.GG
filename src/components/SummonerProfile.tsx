import Image from 'next/image';

interface SummonerProfileProps {
  profileImgId: number;
  summonerLevel: number;
  summonername: string;
  tagLine: string;
}

export default function SummonerProfile({ profileImgId, summonerLevel, summonername, tagLine }: SummonerProfileProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-[12rem] h-[12rem] relative">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/profileicon/${profileImgId}.png`}
            fill
            className="rounded-2xl"
            alt="프로필 이미지"
          />
          <span className="text-white px-2 py-1 bg-primary-500 z-50 absolute rounded-lg text-[1.4rem] font-[700] bottom-[-0.9rem] left-[50%] translate-x-[-50%]">
            {summonerLevel}
          </span>
        </div>
        <h1 className="text-[2rem] font-[700]">{`${summonername} #${tagLine}`}</h1>
      </div>

      <div></div>
    </div>
  );
}
