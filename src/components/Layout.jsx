import React from 'react';
import Head from 'next/head';
import { Breakpoint } from 'react-socks';
import Navigation from './Navigation';
import Footer from './Footer';
import { Consumer } from '../app-context';
import LangSelector from './LangSelector';

const navWidth = 240;
const Layout = ({ children }) => {
  return (
    <Consumer>
      {(app) => (
        <>
          <Head>
            <title>Jorge Barrón | Front-end developer</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='description' content={app.translations.metaDescription} />
          </Head>

          <div className='flex max-w-screen-xl mx-auto'>
            <Navigation width={navWidth} />

            <div className='flex flex-col Wrapper'>
              <LangSelector />
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
      )}
    </Consumer>
  );
};

export default Layout;
