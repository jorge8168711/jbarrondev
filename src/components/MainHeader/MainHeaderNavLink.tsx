import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type NavigationLinkProps = {
  path: string;
  name: string;
  showDivider: boolean;
};

export default function MainHeaderNavLink({ path, name, showDivider }: NavigationLinkProps) {
  const { locale: activeLocale, pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <>
      <li className="text-xs">
        <Link
          className={`py-2 px-2 lg:px-6 ${
            isActive ? 'font-bold text-accent' : 'text-base-content'
          }`}
          href={path}
          locale={activeLocale}>
          {name}
        </Link>
      </li>

      {showDivider && <div className="h-4 w-[1px] bg-base-content/10 mx-1 sm:hidden" />}
    </>
  );
}

MainHeaderNavLink.defaultProps = {
  showDivider: false,
};
