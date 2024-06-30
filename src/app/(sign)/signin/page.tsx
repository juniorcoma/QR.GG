import KakaoIcon from '@/assets/icons/kakao';
import Link from 'next/link';

export default function SigninPage() {
  return (
    <>
      <p className="text-[1.4rem] font-[700] text-[#3d3d3d ] mb-2">
        그날의 게임 난 잘했을까? <br />
        리그 오브 레전드 전적 검색 사이트
      </p>
      <Link href="/">
        <h1 className="text-[4.8rem] font-[900] text-primary-700 max-md:text-[3.6rem]">QR.GG</h1>
      </Link>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`}
        className="flex justify-center items-center w-full text-[1.4rem] font-[500] text-[#070104] bg-[#FEE500] px-4 py-4 rounded-xl mt-[40vh]"
        rel="noopener noreferrer"
      >
        <span className="flex justify-center items-center gap-2 h-10">
          <KakaoIcon />
          <span>카카오로 시작하기</span>
        </span>
      </a>
    </>
  );
}
