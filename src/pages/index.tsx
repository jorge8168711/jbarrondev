import { GetStaticPropsContext } from 'next';
import HomeIntro from '../components/home/Introduction';
import Image from 'next/image';
import HomeSocials from '../components/home/Socials';

export default function Home() {
  return (
    <section className="py-8 dots-bg full-viewport-height flex-full-center">
      <div className="flex-full-center content-box flex-col-reverse sm:flex-row">
        <HomeSocials />

        <div className="flex-1 pl-12">
          <HomeIntro />
        </div>

        <div className="flex-1 flex-full-center relative">
          <Image
            className="object-cover overflow-hidden rounded-full w-full max-w-[500px] relative z-40"
            src={`/img/thumb-lg.jpg`}
            alt="Jorge Barrón"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
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
