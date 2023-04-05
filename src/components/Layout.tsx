import Footer from './footer/Footer';
import MainHeader from './MainHeader/MainHeader';
import { GetStaticPropsContext } from 'next';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main className="full-viewport-height">{children}</main>
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../i18n/${context.locale}.json`)).default,
    },
  };
}
