import { GAME_QUEUE_TYPE } from '@/constant';
import {
  calculateGameCreation,
  calculateGameDuration,
  runImgUrlList,
  summonerItemImgUrlList,
  summonerSpellImgUrlList,
} from '@/utils/calculateRecordInfo';
import { championImgUrl } from '@/utils/getDataImgUrl';
import Image from 'next/image';
import Link from 'next/link';

interface MatchSummaryContentProps {
  isWin: boolean;
  gameTypeId: '400' | '420' | '430' | '440' | '450' | '490' | '1700';
  gameDuration: number;
  gameCreation: number;
}

export function MatchSummaryContent({ isWin, gameTypeId, gameDuration, gameCreation }: MatchSummaryContentProps) {
  return (
    <div className="w-[10rem] flex flex-col gap-4 text-color-content-04 text-[1.4rem]">
      <div className="flex-1">
        <div className={`mb-1 ${isWin ? 'text-color-game-item-02' : 'text-color-game-item-04'} font-[700]`}>
          {GAME_QUEUE_TYPE[`${gameTypeId}`]}
        </div>
        <div>{calculateGameCreation(gameCreation)}</div>
      </div>
      <div className="w-[60%] h-[1px] bg-color-main-06" />
      <div className="flex-1">
        <div className="mb-1">{isWin ? '승리' : '패배'}</div>
        <div>{calculateGameDuration(gameDuration)}</div>
      </div>
    </div>
  );
}

interface ImgContentProps {
  children: React.ReactNode;
  championName: string;
}

export function ImgContent({ children, championName }: ImgContentProps) {
  return (
    <div className="flex gap-2">
      <div>
        <Link href={'/'} className="relative block w-[4.5rem] h-[4.5rem] rounded-[100%] overflow-hidden">
          <Image src={championImgUrl('square', championName)} fill alt="" className="scale-125" />
        </Link>
      </div>
      {children}
    </div>
  );
}

interface SpellRunImgContainerProps {
  summonerSpellId: {
    summoner1Id: number;
    summoner2Id: number;
  };
  runId: {
    mainRun: { runTypeId: number; subId: number };
    subRun: { runTypeId: number };
  };
  gameTypeId: number;
}

export function SpellRunImgContainer({ summonerSpellId, runId, gameTypeId }: SpellRunImgContainerProps) {
  const spellImgUrlList = summonerSpellImgUrlList(summonerSpellId.summoner1Id, summonerSpellId.summoner2Id);
  const runesImgUrlList = gameTypeId !== 1700 && runImgUrlList(runId);

  return (
    <div className="flex gap-1">
      <div className="flex flex-col gap-1 justify-center items-center">
        {spellImgUrlList.map((spellImgUrl: string) => (
          <div key={spellImgUrl} className="w-[2rem] h-[2rem] relative">
            <Image src={spellImgUrl} fill alt="스펠 이미지" className="rounded-[0.4rem]" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 justify-center items-center min-w-7">
        {runesImgUrlList &&
          runesImgUrlList.map((url?: string) => {
            if (!url) return;
            return (
              <div key={url} className="w-[2rem] h-[2rem] relative">
                <Image src={url} fill alt="룬 이미지" className="rounded-[0.4rem]" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

interface ItemImgContainerProps {
  itemIdList: number[];
  isWin: boolean;
}

export function ItemImgContainer({ itemIdList, isWin }: ItemImgContainerProps) {
  const itemImgUrlList = summonerItemImgUrlList(itemIdList);
  return (
    <div className="flex items-end gap-1">
      {itemImgUrlList.map((url: string | null) => {
        if (url === null) {
          return <span key={url} className={`w-8 h-8 rounded-lg ${isWin ? 'bg-[#2F436E]' : 'bg-[#703C47]'}`} />;
        } else {
          return (
            <span key={url} className="relative w-9 h-9">
              <Image className="rounded-lg" src={url} alt="아이템 이미지" fill />
            </span>
          );
        }
      })}
    </div>
  );
}

interface KdaContentProps {
  kdaData: {
    kill: number;
    death: number;
    assists: number;
    kda: number;
  };
}

export function KdaContent({ kdaData }: KdaContentProps) {
  return (
    <div className="pt-3 flex flex-col gap-[0.2rem] w-[10rem]">
      <div className="text-[1.8rem] font-[700] text-white">
        {kdaData.kill} / <span className="text-[#F12525]">{kdaData.death}</span> / {kdaData.assists}
      </div>
      <div className="text-[1.4rem] text-color-content-04">{kdaData.kda.toFixed(2)} : 1</div>
    </div>
  );
}

interface OtherInfoContentProps {
  killParticipationRate: number | boolean;
  goldEarned: number;
  visionWardsBoughtInGame: number;
}

export function OtherInfoContent({
  killParticipationRate,
  goldEarned,
  visionWardsBoughtInGame,
}: OtherInfoContentProps) {
  return (
    <div className="flex flex-col gap-[2px] text-[1.1rem] text-color-content-04 pl-5 border-l border-[rgba(255,255,255,.4)] w-[13rem]">
      <div className="text-[1.3rem] font-[700] text-[#E84057]">킬관여 : {killParticipationRate}%</div>
      <div>총 골드획득량 : {goldEarned.toLocaleString()} 원</div>
      <div>제어 와드 {visionWardsBoughtInGame}</div>
    </div>
  );
}

interface ParticipantsListProps {
  summonerTeamId: number;
  Participants: any;
  puuid: string;
}

export function ParticipantsList({ summonerTeamId, Participants, puuid }: ParticipantsListProps) {
  const sameTeamParticipants = Participants.filter((participant: any) => participant.teamId === summonerTeamId);
  const opposingTeamParticipants = Participants.filter((participant: any) => participant.teamId !== summonerTeamId);
  return (
    <div className="flex gap-2 flex-1 text-color-content-04">
      <div className="flex flex-col gap-[1px]">
        {sameTeamParticipants.map((participant: any) => (
          <Link
            className="inline-block"
            href={`/summoners/${participant.riotIdGameName}-${participant.riotIdTagline}`}
            key={1}
          >
            <span className="inline-flex items-center gap-[2px]">
              <span>
                <Image
                  src={championImgUrl('square', participant.championName)}
                  alt={`${participant.championName} 이미지`}
                  width={16}
                  height={16}
                />
              </span>
              <span className={`cut-text ${participant.puuid === puuid && 'text-white'}`}>
                {participant.riotIdGameName}
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-[1px]">
        {opposingTeamParticipants.map((participant: any) => (
          <Link
            className="inline-block"
            href={`/summoners/${participant.riotIdGameName}-${participant.riotIdTagline}`}
            key={1}
          >
            <span className="inline-flex items-center gap-[2px]">
              <span>
                <Image
                  src={championImgUrl('square', participant.championName)}
                  alt={`${participant.championName} 이미지`}
                  width={16}
                  height={16}
                />
              </span>
              <span className="cut-text">{participant.riotIdGameName}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
