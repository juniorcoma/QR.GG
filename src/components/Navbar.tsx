'use client';
import { NAVBAR_RANDER_LIST } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
  return (
    <aside className="GNB_Wrap">
      <nav className="flex justify-around items-center max-md:justify-between flex-1">
        {NAVBAR_RANDER_LIST.map(item => (
          <Link key={item.id} href={item.link} className="flex flex-col justify-center gap-1 items-center">
            <span>
              <item.icon isActive={pathName === item.link} />
            </span>
            <span className={`text-[1.1rem] ${pathName === item.link && 'text-white'} `}>{item.text}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
