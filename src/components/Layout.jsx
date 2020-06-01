import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import LangSelector from './LangSelector';
import { useTranslation } from '../hooks';

const Layout = ({ children, contentKey }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{t(contentKey).metatitle}</title>
        <meta name='description' content={t('metaDescription')} />
      </Head>

      <LangSelector />
      <Navigation />
      <main className='max-w-screen-lg mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
