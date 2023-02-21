import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { NextIntlProvider } from 'next-intl'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/ThemePicker/ThemePicker'
import { Montserrat } from '@next/font/google'
import { Fira_Code } from '@next/font/google'

import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
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
        className={`${montserrat.variable} ${firaCode.variable} font-sans`}>
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
