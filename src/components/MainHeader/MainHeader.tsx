import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import Logo from '../Logo';
import ThemePicker from '../ThemePicker/ThemePicker';
import MainHeaderNavLink from './MainHeaderNavLink';
import { useRouter } from 'next/router';
import { Breakpoint } from 'react-socks';

export default function MainHeader() {
  const { locale: activeLocale } = useRouter();
  const [ready, setReady] = useState(false);

  // avoid hydration errors
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <header className="py-4 shadow-sm relative print:hidden">
      <nav className="flex items-center content-box sm:flex-row flex-col">
        <div className="mr-auto flex items-center w-full sm:w-auto">
          <Link href="/" locale={activeLocale} className="mr-auto">
            <Logo />
          </Link>

          {ready && (
            <Breakpoint xs only className="flex items-center">
              <ThemePicker />
              <LocaleSwitcher />
            </Breakpoint>
          )}
        </div>

        <div className="h-[1px] bg-base-content/10 w-full mt-4 mb-3 sm:hidden" />

        <div className="flex items-center w-full sm:w-auto sm:pt-0">
          <ul className="flex items-center flex-1 sm:mx-auto sm:justify-end">
            <MainHeaderNavLink name="_about" path="/" showDivider />
            <MainHeaderNavLink name="_resume" path="/resume" />
          </ul>

          {ready && (
            <Breakpoint sm up className="flex items-center">
              <div className="bg-base-content/10 h-6 w-[1px] ml-1 mr-2 sm:mr-6"></div>

              <div className="ml-auto">
                <ThemePicker />
                <LocaleSwitcher />
              </div>
            </Breakpoint>
          )}
        </div>
      </nav>
    </header>
  );
}
