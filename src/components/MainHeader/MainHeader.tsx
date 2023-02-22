import Link from 'next/link';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import Logo from '../Logo';
import ThemePicker from '../ThemePicker/ThemePicker';
import MainHeaderNavLink from './MainHeaderNavLink';
import { useRouter } from 'next/router';

export default function MainHeader() {
  const { locale: activeLocale } = useRouter();

  return (
    <header className="bg-base-300 shadow-sm pt-4">
      <div className="flex items-center container mx-auto px-6 pb-4">
        <Link href="/" locale={activeLocale}>
          <Logo />
        </Link>

        <div className="mr-auto"></div>

        <ThemePicker />
        <LocaleSwitcher />
      </div>

      <nav className="bg-base-100 border-y border-base-content/20">
        <ul className="flex items-center container mx-auto px-6">
          <div className="h-10 w-[1px] bg-base-content/20" />
          <MainHeaderNavLink name="_about me" path="/" showDivider />
          <MainHeaderNavLink name="_resume" path="/resume" showDivider />
          <MainHeaderNavLink name="_projects" path="/projects" showDivider />
          <MainHeaderNavLink name="_contact" path="/contact" showDivider />
        </ul>
      </nav>
    </header>
  );
}
