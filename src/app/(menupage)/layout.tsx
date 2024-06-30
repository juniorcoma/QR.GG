import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function MenupageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="px-16 py-14 max-md:px-8">{children}</main>
      <Navbar />
    </>
  );
}
