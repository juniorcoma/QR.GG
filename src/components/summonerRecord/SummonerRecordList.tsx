import useGetRunes from '@/hook/query/useGetRunes';
import useGetSummonerSpell from '@/hook/query/useGetSummonerSpell';
import SummonerRecordCard from './SummonerRecordCard';
import {
  ImgContent,
  ItemImgContainer,
  KdaContent,
  MatchSummaryContent,
  OtherInfoContent,
  ParticipantsList,
  SpellRunImgContainer,
} from './SummonerRecordCardParts';

interface SummonerRecordListProps {
  recordList: any;
  puuid: string;
}

export default function SummonerRecordList({ recordList, puuid }: SummonerRecordListProps) {
  const flattenedData = recordList.flat() || [];

  const { data: summonerSpellData } = useGetSummonerSpell();
  const { data: runesData } = useGetRunes();
  return (
    <div className="mb-8">
      <ul className="flex flex-col gap-3">
        {flattenedData.map((item: any) => {
          console.log(item);
          const summonerInfo = item.info.participants.find((summoner: any) => summoner.puuid === puuid);
          console.log(summonerInfo);
          const runInfo = {
            mainRun: {
              runTypeId: summonerInfo.perks.styles[0].style,
              subId: summonerInfo.perks.styles[0].selections[0].perk,
            },
            subRun: { runTypeId: summonerInfo.perks.styles[1].style },
          };
          const { item0, item1, item2, item3, item4, item5, item6 } = summonerInfo;
          const killParticipationRate =
            item.info.queueId !== 1700 &&
            Math.floor(
              ((summonerInfo.kills + summonerInfo.assists) /
                item.info.teams.find((team: any) => team.teamId === summonerInfo.teamId).objectives.champion.kills) *
                100,
            );
          return (
            <li key={item.info.gameId}>
              <SummonerRecordCard isWin={summonerInfo.win}>
                <MatchSummaryContent
                  isWin={summonerInfo.win}
                  gameTypeId={item.info.queueId}
                  gameDuration={item.info.gameDuration}
                  gameCreation={item.info.gameCreation}
                />
                <div className="flex flex-col gap-2 py-3">
                  <div className="flex gap-3">
                    <ImgContent championName={summonerInfo.championName}>
                      <SpellRunImgContainer
                        summonerSpellId={{
                          summoner1Id: summonerInfo.summoner1Id,
                          summoner2Id: summonerInfo.summoner2Id,
                        }}
                        runId={runInfo}
                        gameTypeId={item.info.queueId}
                      />
                    </ImgContent>
                    <KdaContent
                      kdaData={{
                        kill: summonerInfo.kills,
                        death: summonerInfo.deaths,
                        assists: summonerInfo.assists,
                        kda: summonerInfo.challenges.kda,
                      }}
                    />
                    {item.info.queueId !== 1700 && (
                      <OtherInfoContent
                        killParticipationRate={killParticipationRate}
                        goldEarned={summonerInfo.goldEarned}
                        visionWardsBoughtInGame={summonerInfo.visionWardsBoughtInGame}
                      />
                    )}
                  </div>
                  <div className="flex flex-1">
                    <ItemImgContainer
                      isWin={summonerInfo.win}
                      itemIdList={[item0, item1, item2, item3, item4, item5, item6]}
                    />
                  </div>
                </div>
                {item.info.queueId !== 1700 && (
                  <ParticipantsList
                    summonerTeamId={summonerInfo.teamId}
                    Participants={item.info.participants}
                    puuid={puuid}
                  />
                )}
              </SummonerRecordCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
