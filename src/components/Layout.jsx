import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

const navWidth = 240;
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jorge Barrón | Front-end developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Front-end developer, padre de familia y amante de la ilustraciónn y los videojuegos.'
        />
      </Head>

      <div className='flex'>
        <Navigation width={navWidth} />

        <div className='flex flex-col Wrapper'>
          <main className='flex-1'>{children}</main>

          <Footer />
        </div>
      </div>

      <style jsx>
        {`
          .Wrapper {
            background-color: rgba(0, 0, 0, 0.15);
            min-height: 100vh;
            width: calc(100% - ${navWidth}px);
          }
        `}
      </style>
    </>
  );
};

export default Layout;
