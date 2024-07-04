'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getGameInfo = async ({ pageParam = 0, puuid }) => {
  const { data: gameIdList } = await axios.get(
    `http://localhost:3000/api/v1/riot/match/list/${puuid}?start=${pageParam * 20}`,
  );

  const gameInfo = [];

  for (const id of gameIdList) {
    const { data } = await axios.get(`http://localhost:3000/api/v1/riot/match/detail/${id}`);
    gameInfo.push(data);
    await delay(100);
  }

  return gameInfo;
};
export default function GameRecordContainer({ puuid }) {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['gameRecord', puuid],
    queryFn: async ({ pageParam = 0 }) => await getGameInfo({ pageParam: pageParam, puuid }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div>
      <button type="button" onClick={() => fetchNextPage()}>
        다음꺼
      </button>
      <p className="mt-3 mb-3 text-[1.2rem] font-[700 ]">최근 전적</p>
      <RecordSummary puuid={puuid} dataArray={data?.pages} />
    </div>
  );
}

function RecordSummary({ puuid, dataArray }) {
  console.log(puuid, dataArray);
  const summaryData = calculateRecord(dataArray, puuid);
  const chartData = {
    datasets: [
      {
        data: [summaryData?.win, summaryData?.lose],
        backgroundColor: [' rgba(0, 123, 255, 1)', ' rgba(255, 76, 76, 1)'], // 각 데이터 항목에 대한 색상
        hoverBackgroundColor: ['rgba(0, 123, 255, 0.6)', 'rgba(255, 76, 76, 0.6)'], // 각 데이터 항목에 대한 호버 색상
      },
    ],
  };

  return (
    <div className="px-3 py-4 bg-white rounded-2xl flex gap-4">
      <div className="w-[14rem] relative">
        <p className="text-center text-[1.6rem] font-[900]">
          {summaryData && `${summaryData.win + summaryData.lose}전 ${summaryData.win}승 ${summaryData.lose}패`}
        </p>
        <Doughnut data={chartData} options={{ cutout: '70%' }} />
        <span className="absolute top-[50%] left-[50%] translate-y-[20%] translate-x-[-50%] text-[1.8rem] font-[700] text-game-item-victory-100">
          {summaryData && Math.floor((summaryData?.win / (summaryData?.win + summaryData?.lose)) * 100)}%
        </span>
      </div>
      <div className="pt-[6rem]">
        <p className="text-[1.4rem] font-[700] mb-4">
          평균 KDA : {summaryData && summaryData.avgKill}/
          <span className="text-game-item-lose-100">{summaryData && summaryData.avgDeath}</span>/
          {summaryData && summaryData.avgAssists}
        </p>
        <p className="text-[2.4rem] font-[900]">
          <span className="text-primary-600">{summaryData && summaryData?.totalAvg.toFixed(2)}</span> : 1
        </p>
      </div>
    </div>
  );
}

function calculateRecord(data: any, puuid: string) {
  if (!data) return;
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
