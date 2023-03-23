import React from 'react';
import ResumeHeader from '../components/resume/Header';
import ResumeContacts from '../components/resume/Contacts';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import ResumeExperience from '../components/resume/Experience';

export default function Resume() {
  const t = useTranslations('resume');

  return (
    <>
      <div className="content-box py-10 print:p-0">
        <ResumeHeader />

        <hr className="my-6 border-base-content/40" />
        <ResumeContacts />
        <hr className="my-6 border-base-content/40" />

        <div className="flex flex-wrap mt-6">
          <section className="w-12/12 lg:w-7/12 pr-8 border-r border-base-content/40">
            <h3 className="text-accent font-mono text-2xl uppercase font-medium mb-3">
              {t('work-experience')}
            </h3>

            <ResumeExperience />
          </section>

          <section className="w-12/12 lg:w-5/12 pl-8">
            <h3 className="text-accent font-mono text-2xl uppercase font-medium mb-3">
              {t('technical-skills')}
            </h3>
          </section>
        </div>
      </div>
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
