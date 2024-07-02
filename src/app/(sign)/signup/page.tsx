import SignupForm from './_components/SignupForm';

export default function SignupPage() {
  return (
    <>
      <p className="text-[1.2rem] font-[700] text-[#9B9B9B;] mb-2">1분도 안걸려요</p>
      <h1 className="text-[2.4rem] font-[900] mb-10">
        누가 범인인지 <br /> 같이 찾아봐요!
      </h1>
      <SignupForm />
    </>
  );
}
