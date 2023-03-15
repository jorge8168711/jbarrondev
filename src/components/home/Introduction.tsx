import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import React from 'react';

const mail = 'jbarron.dev@gmail.com';

export default function HomeIntro() {
  const t = useTranslations('home');

  return (
    <>
      <h2 className="text-md font-medium text-accent font-mono mb-1">{t('subtitle')}</h2>
      <h1 className="text-8xl font-semibold mb-4">JORGE BARRÓN</h1>

      <div className="flex items-center">
        <div className="bg-accent blink w-2 h-6 mr-4"></div>
        <h3 className="font-semibold text-base-content/80 font-mono text-xl">
          Front-end developer
        </h3>
      </div>

      <p className="text-md leading-relaxed text-base-content/70 mt-8 mb-14">{t('description')}</p>

      <button className="btn btn-accent w-48 mr-6">{t('cv-button')}</button>
      <a href={`mailto:${mail}?subject=${t('mail-to-subject')}`} className="btn w-48">
        {t('work-with-me')}
      </a>

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
