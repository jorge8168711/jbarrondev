import React from 'react';
import Head from 'next/head';
import { Breakpoint } from 'react-socks';
import Navigation from './Navigation';
import Footer from './Footer';
import LangSelector from './LangSelector';
import { useTranslation } from '../hooks';

const navWidth = 240;
const Layout = ({ children, contentKey }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{t(contentKey).metatitle}</title>
        <meta name='description' content={t('metaDescription')} />
      </Head>

      <div className='flex flex-col max-w-screen-xl mx-auto md:flex-row '>
        <Navigation width={navWidth} />

        <div className='flex flex-col Wrapper'>
          <Breakpoint md up>
            <LangSelector />
          </Breakpoint>

          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </div>

      <style jsx>
        {`
          .Wrapper {
            min-height: 100vh;
            width: calc(100% - ${navWidth}px);
          }

          @media screen and (max-width: 799px) {
            .Wrapper {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
