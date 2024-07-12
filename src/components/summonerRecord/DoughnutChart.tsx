import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  wins: number;
  losess: number;
}

export default function DoughnutChart({ wins, losess }: DoughnutChartProps) {
  const chartData = {
    datasets: [
      {
        data: [wins, losess],
        backgroundColor: [' rgba(0, 123, 255, 1)', ' rgba(255, 76, 76, 1)'], // 각 데이터 항목에 대한 색상
        hoverBackgroundColor: ['rgba(0, 123, 255, 0.6)', 'rgba(255, 76, 76, 0.6)'], // 각 데이터 항목에 대한 호버 색상
      },
    ],
  };
  const winRate = Math.floor((wins / (wins + losess)) * 100);
  return (
    <div>
      <p className="text-[1.6rem] text-center">
        {wins + losess}전 {wins}승 {losess}패
      </p>
      <div className="w-[12rem] relative">
        <Doughnut data={chartData} options={{ cutout: '70%', borderColor: 'transparent', animation: false }} />
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] text-[1.6rem] font-[700] text-color-main-04">
          {winRate}%
        </span>
      </div>
    </div>
  );
}
