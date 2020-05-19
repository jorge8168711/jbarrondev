/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Breakpoint } from 'react-socks';
import { Consumer } from '../app-context';
import LangSelector from './LangSelector';

const items = [
  { label: 'Acerca de mi', name: '', langKey: 'about' },
  { label: 'Proyectos', name: 'projects', langKey: 'projects' },
  { label: 'Contacto', name: 'contact', langKey: 'contact' },
  { label: 'Acerca de este sitio', name: 'about', langKey: 'websiteAbout' }
];

const Navigation = ({ width }) => {
  const router = useRouter();

  return (
    <Consumer>
      {(app) => (
        <>
          <Breakpoint sm only>
            <header className='flex items-center px-4 shadow-md bg-primary'>
              <Link href='/'>
                <a className='block w-32 mr-auto'>
                  <svg className='w-full h-16'>
                    <use href='/img/icons.svg#brandIcon' />
                  </svg>
                </a>
              </Link>

              <LangSelector />
            </header>
          </Breakpoint>

          <Breakpoint md up>
            <nav className='w-56 Navigation'>
              <Link href='/'>
                <a className='block px-8 pt-4'>
                  <svg className='w-full h-16'>
                    <use href='/img/icons.svg#brandIcon' />
                  </svg>
                </a>
              </Link>

              <ul className='mt-8 font-sans text-sm'>
                {items.map((item) => (
                  <li
                    key={item.name}
                    className={`px-8 py-1 mb-3 text-right border-r-4 ${
                      router.pathname === `/${item.name}` ? 'border-yellow' : 'border-transparent'
                    }`}>
                    <Link href={`/${item.name}`}>
                      <a
                        className={
                          router.pathname === `/${item.name}`
                            ? 'text-yellow font-bold'
                            : 'opacity-75'
                        }>
                        {app.translations[item.langKey].title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <style jsx>
              {`
                .Navigation {
                  width: ${width}px;
                }
              `}
            </style>
          </Breakpoint>
        </>
      )}
    </Consumer>
  );
};

export default Navigation;
