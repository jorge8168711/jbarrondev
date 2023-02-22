import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { NextIntlProvider } from 'next-intl'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/ThemePicker/ThemePicker'
import { Montserrat } from '@next/font/google'
import { Fira_Code } from '@next/font/google'
import { IBM_Plex_Mono } from '@next/font/google'

import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  weight: ['200', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='getTheme
      '>{`document.documentElement.dataset.theme = JSON.parse(window.localStorage.getItem('theme') || "")`}</Script>

      <Head>
        <title>Jorge Barrón</title>
        <meta
          content='width=device-width, initial-scale=1'
          name='viewport'
        />
        <meta
          name='description'
          content='Jorge Barrón'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <div
        id='root-theme'
        className={`${montserrat.variable} ${ibmPlex.variable} font-sans`}>
        <NextIntlProvider messages={pageProps.messages}>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </NextIntlProvider>
      </div>
    </>
  )
}
