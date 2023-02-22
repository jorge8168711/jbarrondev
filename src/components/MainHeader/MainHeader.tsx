import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import LocaleSwitcher from '../LocaleSwitcher'
import Logo from '../Logo'
import ThemePicker from '../ThemePicker/ThemePicker'

export default function MainHeader() {
  const { locale: activeLocale } = useRouter()

  return (
    <header className="bg-base-300 shadow-sm py-2">
      <div className="flex items-center container mx-auto px-6">
        <Link
          href="/"
          locale={activeLocale}>
          <Logo />
        </Link>

        <div className="mr-auto"></div>

        <ThemePicker />
        <LocaleSwitcher />
      </div>
    </header>
  )
}
