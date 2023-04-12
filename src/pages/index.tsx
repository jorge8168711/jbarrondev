import HomeIntro from '../components/home/Introduction';
import Image from 'next/image';
import HomeSocials from '../components/home/Socials';
import CustomHead from '../components/CustomHead';

import { GetStaticPropsContext } from 'next';
import { Breakpoint } from 'react-socks';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MY_NAME } from '../lib/constants';
import { useRouter } from 'next/router';

export default function Home() {
  const t = useTranslations('home');
  const [ready, setReady] = useState(false);
  const locale = useLocale();
  const { pathname, defaultLocale } = useRouter();

  // avoid hydration errors
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <CustomHead
        locale={locale}
        metaTitle={t('meta-title')}
        metaDescription={t('meta-description')}
        previewImgUrl={`/img/${locale}-home-preview.png`}
        pathname={pathname}
        defaultLocale={defaultLocale}
      />

      <section className="py-8 dots-bg full-viewport-height flex-full-center">
        <div className="flex-full-center content-box flex-col-reverse md:flex-row">
          {ready && (
            <Breakpoint md up className="flex gap-4 flex-col items-center">
              <HomeSocials />
            </Breakpoint>
          )}

          <div className="flex-1 pl-6 lg:pl-12 pt-12 md:pt-0">
            <HomeIntro />
          </div>

          <div className="flex-1 flex-full-center relative lg:pl-4">
            <Image
              priority
              className="rounded-full w-full max-w-[300px] lg:max-w-[500px]"
              src={`/img/thumb-lg.jpg`}
              alt={MY_NAME}
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>
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
