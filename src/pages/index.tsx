import { GetStaticPropsContext } from 'next';
import { LogoGithub, LogoLinkedin, LogoTwitter } from '@carbon/icons-react';
import { useTranslations } from 'next-intl';
import HomeIntro from '../components/home/Introduction';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <section className="py-8 bg-base-200 full-viewport-height flex-full-center">
      <div className="flex-full-center content-box flex-col-reverse sm:flex-row">
        <div className="flex-1 pr-6">
          <HomeIntro />
        </div>

        <div className="flex-1 flex-full-center">
          <Image
            className="object-cover overflow-hidden rounded-lg w-full"
            src={`/img/thumb-lg.jpg`}
            alt="Jorge Barrón"
            width="400"
            height="400"
          />
        </div>
      </div>

      {/*
      <p className="mt-4 text-xl font-light">
        {t('description1')} <br />
        {t('description2')}
      </p> */}

      {/* <div className="flex items-center pt-2 gap-2">
        <a
          className="text-primary"
          href="https://twitter.com/_JorgeBarron"
          target="__blank"
          rel="nofollow noreferrer noopener">
          <LogoTwitter size={24} />
        </a>

        <a
          className="text-primary"
          href="https://www.linkedin.com/in/jorgebarrondev/"
          target="__blank"
          rel="nofollow noreferrer noopener">
          <LogoLinkedin size={24} />
        </a>

        <a
          className="text-primary"
          href="https://github.com/jorge8168711"
          target="__blank"
          rel="nofollow noreferrer noopener">
          <LogoGithub size={24} />
        </a>
      </div> */}
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
