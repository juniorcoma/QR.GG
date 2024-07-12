import Image from 'next/image';
import SummonerSearchBar from '@/components/SummonerSearchBar';
import MainImg from '@/assets/images/mainBackImg.webp';

export default function HomePage() {
  return (
    <div className="main-wrap">
      <div className="img-wrap">
        <Image src={MainImg} fill alt="메인 페이지 이미지" />
      </div>
      <div>
        <SummonerSearchBar />
      </div>
    </div>
  );
}
