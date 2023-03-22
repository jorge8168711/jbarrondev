import React from 'react';
import ResumeHeader from '../components/resume/Header';
import ResumeContacts from '../components/resume/Contacts';
import { GetStaticPropsContext } from 'next';

export default function Resume() {
  return (
    <>
      <div className="content-box py-10 print:p-0">
        <ResumeHeader />
        <ResumeContacts />

        <div className="flex">
          <div className=""></div>
          <h2>WORK EXPERIENCE</h2>
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
