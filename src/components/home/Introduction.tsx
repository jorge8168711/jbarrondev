import { useTranslations } from 'next-intl';
import React from 'react';

export default function HomeIntro() {
  const t = useTranslations('home');

  return (
    <>
      <h2 className="text-md  mb-1 font-medium">{t('subtitle')}</h2>
      <h1 className="text-5xl text-primary mb-2 font-medium">{t('title')}</h1>
      <h3 className="text-md font-medium text-accent">Front-end developer</h3>

      <p className="text-xl mt-6 mb-2 border-l-4 pl-4 border-base-content/40 py-1">
        {t('content')}
      </p>
    </>
  );
}
