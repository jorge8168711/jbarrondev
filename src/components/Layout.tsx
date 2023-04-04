import MainHeader from './MainHeader/MainHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main className="full-viewport-height">{children}</main>
    </>
  );
}
