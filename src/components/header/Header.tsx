import Link from 'next/link';
import LoginRenderContainer from './LoginRender';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between w-[90%] m-auto pb-3 pt-3 items-center">
        <Link href="/">
          <h1 className="text-[2.4rem] font-[900] text-primary-700 ">QR.GG</h1>
        </Link>
        <LoginRenderContainer />
      </div>
    </header>
  );
}
