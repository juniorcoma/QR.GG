'use client';

import useSummonerRecordInfo from '@/hook/query/useSummonerRecordInfo';
import DoughnutChart from './DoughnutChart';
import SummonerRecordList from './SummonerRecordList';
import { Suspense } from 'react';

interface SummonerRecordContainerProps {
  puuid: string;
}

export default function SummonerRecordContainer({ puuid }: SummonerRecordContainerProps) {
  const { data, fetchNextPage } = useSummonerRecordInfo(puuid);
  const summaryData = calculateSummaryData(data.pages, puuid);
  console.log(summaryData);
  return (
    <>
      <section className="mb-8">
        <h2 className="text-[2.4rem] mb-2">최근 게임</h2>
        <div className="p-6 rounded-[1.2rem] bg-color-bg-03 flex gap-10">
          <DoughnutChart wins={summaryData.win} losess={summaryData.lose} />
          <div className="pt-12 text-color-content-06">
            <p className="text-[1.4rem] mb-3">
              {summaryData.avgKill} / <span className="text-[#FF4343]">{summaryData.avgDeath}</span> /{' '}
              {summaryData.avgAssists}
            </p>
            <p className="text-[2.4rem] font-[700] text-white">
              {((summaryData.avgKill + summaryData.avgAssists) / summaryData.avgDeath).toFixed(2)} : 1
            </p>
          </div>
        </div>
      </section>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <SummonerRecordList recordList={data.pages} puuid={puuid} />
        </Suspense>
        <button
          type="button"
          className="pt-[1.2rem] pb-[1.2rem] bg-color-bg-03 w-full hover:bg-color-bg-05 text-[1.6rem]"
          onClick={() => fetchNextPage()}
        >
          더 보기
        </button>
      </section>
    </>
  );
}

function calculateSummaryData(data: any, puuid: string) {
  const summaryData = {
    win: 0,
    lose: 0,
    kill: 0,
    death: 0,
    assists: 0,
    avgKill: 0,
    avgDeath: 0,
    avgAssists: 0,
    totalAvg: 0,
  };
  for (const list of data) {
    list.forEach((item: any) => {
      const targetUser = item.info.participants.filter((info: any) => info.puuid === puuid);
      if (targetUser[0].win) summaryData.win += 1;
      else summaryData.lose += 1;
      summaryData.assists += targetUser[0].assists;
      summaryData.kill += targetUser[0].kills;
      summaryData.death += targetUser[0].deaths;
    });
  }
  const totalGameCount = summaryData.win + summaryData.lose;
  summaryData.avgKill = summaryData.kill / totalGameCount;
  summaryData.avgDeath = summaryData.death / totalGameCount;
  summaryData.avgAssists = summaryData.assists / totalGameCount;
  summaryData.totalAvg = (summaryData.avgKill + summaryData.avgAssists) / summaryData.avgDeath;
  return summaryData;
}
