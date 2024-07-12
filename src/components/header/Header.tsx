import Link from 'next/link';
import LoginRenderContainer from './LoginRender';

export default function Header() {
  return (
    <header>
      <div className="header-wrap">
        <Link href="/">
          <h1 className="font-[900] text-color-content-02">QR.GG</h1>
        </Link>

        <LoginRenderContainer />
      </div>
    </header>
  );
}
