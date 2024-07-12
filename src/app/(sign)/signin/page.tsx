import KakaoIcon from '@/assets/icons/kakao';
import Link from 'next/link';

export default function SigninPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-[1.6rem] font-[700] mb-2 text-color-content-02">로그인으로 더욱 다양한</p>
        <p className="text-[1.6rem] font-[700] mb-2 text-color-content-02">
          <span className="font-[900] text-color-main-01">QR.GG</span> 서비스를 즐겨보세요
        </p>
      </div>
      <Link href="/">
        <h1 className="text-[4.8rem] font-[900] text-primary-700 max-md:text-[3.6rem]">QR.GG</h1>
      </Link>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`}
        className="flex justify-center items-center w-full text-[1.4rem] font-[500] text-[#070104] bg-[#FEE500] px-4 py-4 rounded-xl mt-[50vh]"
        rel="noopener noreferrer"
      >
        <span className="flex justify-center items-center gap-3 py-2 text-[1.6rem]">
          <KakaoIcon />
          <span>카카오로 시작하기</span>
        </span>
      </a>
    </>
  );
}
