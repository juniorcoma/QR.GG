import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between w-[90%] m-auto pb-3 pt-3 items-center">
        <Link href="/">
          <h1 className="text-[2.4rem] font-[900] text-primary-700 ">QR.GG</h1>
        </Link>
        <Link href="/signin" className="inline-block py-1 px-3 text-[1.4rem] text-white bg-primary-400 rounded">
          <span>Sign in</span>
        </Link>
      </div>
    </header>
  );
}
