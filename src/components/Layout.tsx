import MainHeader from './MainHeader/MainHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main className="full-viewport-height dots-bg">{children}</main>
    </>
  );
}
