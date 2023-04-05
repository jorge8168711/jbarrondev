import React, { useState } from 'react';
import ResumeHeader from '../components/resume/Header';
import ResumeContacts from '../components/resume/Contacts';
import ResumeExperience from '../components/resume/Experience';
import ResumeSizeControl from '../components/resume/SizeControl';
import ResumeTechnicalSkills from '../components/resume/TechnicalSkills';
import ResumeSoftSkills from '../components/resume/SoftSkills';
import ResumeLanguages from '../components/resume/Languages';
import CustomHead from '../components/CustomHead';

import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export default function Resume() {
  const t = useTranslations('resume');
  const locale = useLocale();
  const { pathname, defaultLocale } = useRouter();

  const [proseClass, setProseClass] = useState('prose-sm');
  const containerMaxWidth = proseClass ? 'sm' : '';

  return (
    <>
      <CustomHead
        locale={locale}
        metaTitle={t('meta-title')}
        metaDescription={t('meta-description')}
        previewImgUrl="/img/home-preview.png"
        pathname={pathname}
        defaultLocale={defaultLocale}
      />

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

        <ResumeSizeControl onChange={(val) => setProseClass(val)} />
      </div>

      <hr className="border-base-content/30 my-2" />

      {/* RESUME CONTENT SECTION */}
      <div
        className={`content-box ${containerMaxWidth} my-6 py-8 prose ${proseClass} resume-container bg-base-200/30 drop-shadow-md`}>
        <ResumeContacts />
        <ResumeHeader />
        <ResumeExperience />
        <ResumeTechnicalSkills />

        <div className="flex flex-wrap">
          <ResumeSoftSkills />
          <ResumeLanguages />
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
