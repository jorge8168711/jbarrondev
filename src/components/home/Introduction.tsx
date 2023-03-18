import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Breakpoint } from 'react-socks';
import HomeSocials from './Socials';

const mail = 'jbarron.dev@gmail.com';

export default function HomeIntro() {
  const t = useTranslations('home');
  const [ready, setReady] = useState(false);

  // avoid hydration errors
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <p className="text-sm lg:text-base font-medium text-accent font-mono mb-1">{t('subtitle')}</p>
      <h1 className="text-4xl lg:text-8xl font-semibold mb-4">JORGE BARRÓN</h1>

      <div className="flex items-center">
        <div className="bg-accent blink w-2 h-6 mr-4"></div>
        <h2 className="font-semibold text-base-content/80 font-mono text-lg lg:text-xl">
          Front-end developer
        </h2>
      </div>

      <p className="text-md leading-relaxed text-base-content/70 mt-8">{t('description')}</p>

      {ready && (
        <Breakpoint sm down className="flex items-center gap-4 mt-6">
          <HomeSocials isVertical={false} />
        </Breakpoint>
      )}

      <footer className="mt-10 md:mt-14">
        <button className="btn btn-accent lg:w-44 mr-6">{t('cv-button')}</button>
        <a href={`mailto:${mail}?subject=${t('mail-to-subject')}`} className="btn lg:w-44">
          {t('work-with-me')}
        </a>
      </footer>

      <style jsx>{`
        .blink {
          animation: blink 1s linear infinite;
        }

        @keyframes blink {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
