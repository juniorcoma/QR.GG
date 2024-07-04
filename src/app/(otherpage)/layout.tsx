import Header from '@/components/header/Header';

export default function OtherPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="px-16 py-14 max-md:px-8">{children}</main>
    </>
  );
}
