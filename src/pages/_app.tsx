import Layout from '../components/Layout';
import Head from 'next/head';
import Script from 'next/script';
import { NextIntlProvider } from 'next-intl';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/ThemePicker/ThemePicker';
import { Montserrat } from '@next/font/google';
import { IBM_Plex_Mono } from '@next/font/google';

import '@/styles/globals.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  weight: ['200', '400', '500', '600', '700'],
});

setDefaultBreakpoints([
  { xs: 0 },
  { sm: 640 },
  { md: 768 },
  { lg: 1024 },
  { xl: 1280 },
  { xxl: 1536 },
]);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="getTheme
      ">{`document.documentElement.dataset.theme = JSON.parse(window.localStorage.getItem('theme') || "")`}</Script>

      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/img/favicon.svg" />
      </Head>

      <div id="root-theme" className={`${montserrat.variable} ${ibmPlex.variable} font-sans`}>
        <NextIntlProvider messages={pageProps.messages}>
          <BreakpointProvider>
            <ThemeProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </BreakpointProvider>
        </NextIntlProvider>
      </div>
    </>
  );
}
