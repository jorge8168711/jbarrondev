import React, { useState } from 'react';
import ResumeHeader from '../components/resume/Header';
import ResumeContacts from '../components/resume/Contacts';
import ResumeExperience from '../components/resume/Experience';
import SizeControl from '../components/resume/SizeControl';
import TechnicalSkills from '../components/resume/TechnicalSkills';
import SoftSkills from '../components/resume/SoftSkills';
import Languages from '../components/resume/Languages';
import Head from 'next/head';

import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function Resume() {
  const t = useTranslations('resume');
  const locale = useLocale();

  const [proseClass, setProseClass] = useState('prose-sm');
  const containerMaxWidth = proseClass ? 'sm' : '';

  return (
    <>
      <Head>
        <title>{t('meta-title')}</title>
        <meta name="title" content={t('meta-title')} />
        <meta name="description" content={t('meta-description')} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://jbarron.dev/resume/${locale}`} />
        <meta property="og:title" content={t('meta-title')} />
        <meta property="og:description" content={t('meta-description')} />
        <meta property="og:image" content="/img/resume-preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://jbarron.dev/resume/${locale}`} />
        <meta property="twitter:title" content={t('meta-title')} />
        <meta property="twitter:description" content={t('meta-description')} />
        <meta property="twitter:image" content="/img/resume-preview.png" />
      </Head>

      <hr className="border-base-content/30 my-2" />

      {/* CONFIG SECTION */}
      <div className="content-box flex items-center gap-4">
        <a
          aria-label={t('cv-button')}
          role="button"
          className="btn btn-square btn-ghost btn-xs font-normal"
          href="en-jorge-barron-resume.pdf"
          download>
          <ArrowDownTrayIcon width={16} />
        </a>

        <div className="h-6 w-[1px] bg-base-content/30" />

        <SizeControl onChange={(val) => setProseClass(val)} />
      </div>

      <hr className="border-base-content/30 my-2" />

      {/* RESUME CONTENT SECTION */}
      <div
        className={`content-box ${containerMaxWidth} my-6 py-8 prose ${proseClass} resume-container bg-base-200/30 drop-shadow-md`}>
        <ResumeContacts />
        <ResumeHeader />
        <ResumeExperience />
        <TechnicalSkills />

        <div className="flex flex-wrap">
          <SoftSkills />
          <Languages />
        </div>
      </div>

      <style jsx>{`
        .resume-container {
          transition: all 0.1s linear;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/${context.locale}.json`)).default,
    },
  };
}
