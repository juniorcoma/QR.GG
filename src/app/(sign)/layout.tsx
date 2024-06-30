export default function SignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-16 py-36 max-md:px-8">{children}</div>;
}
