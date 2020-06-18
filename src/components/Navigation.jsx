/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from '../hooks';
import LangSelector from './LangSelector';

const items = [
  { label: 'Acerca de mi', name: '', langKey: 'about' },
  { label: 'Proyectos', name: '/projects', langKey: 'projects' }
];

const Navigation = () => {
  const router = useRouter();
  const { t, locale } = useTranslation();

  return (
    <header className='absolute top-0 left-0 z-50 w-full px-4 py-2 md:px-6'>
      <div className='flex items-center max-w-screen-lg mx-auto'>
        <Link href='/'>
          <a className='block w-20 mr-auto md:w-32'>
            <svg className='w-full h-12'>
              <use href='/img/icons.svg#brandIcon' />
            </svg>
          </a>
        </Link>

        <ul className='flex items-center font-sans text-xs md:text-sm'>
          {items.map((item, i) => (
            <li key={item.name} className={i > 0 ? 'ml-4 md:ml-10' : ''}>
              <Link href={`/[lang]${item.name}`} as={`/${locale}${item.name}`}>
                <a
                  className={
                    router.pathname === `/[lang]${item.name}`
                      ? 'text-yellow font-bold'
                      : 'opacity-75'
                  }>
                  {t(item.langKey).title}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <LangSelector />
      </div>
    </header>
  );
};

export default Navigation;
