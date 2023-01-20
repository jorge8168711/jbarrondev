import MainHeader from '../components/MainHeader/MainHeader'
import { Montserrat } from '@next/font/google'
import { Fira_Code } from '@next/font/google'
import { ThemeProvider } from '../components/ThemePicker/ThemePicker'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${firaCode.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ThemeProvider>
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
