/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ width }) => {
  const router = useRouter();
  const items = [
    { label: 'Acerca de mi', name: '' },
    { label: 'Proyectos', name: 'projects' },
    { label: 'Contacto', name: 'contact' },
    { label: 'Acerca de este sitio', name: 'about' }
  ];
  return (
    <>
      <nav className='w-56 Navigation'>
        <Link href='/'>
          <a className='block px-8'>
            <svg className='w-full'>
              <use href='/img/icons.svg#brandIcon' />
            </svg>
          </a>
        </Link>

        <ul className='font-sans text-sm'>
          {items.map((item) => (
            <li
              key={item.name}
              className={`px-8 py-2 mb-2 text-right border-r-8 ${
                router.pathname === `/${item.name}` ? 'border-yellow' : 'border-transparent'
              }`}>
              <Link href={`/${item.name}`}>
                <a
                  className={
                    router.pathname === `/${item.name}` ? 'text-yellow font-bold' : 'opacity-75'
                  }>
                  {item.label}
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
    </>
  );
};

export default Navigation;
