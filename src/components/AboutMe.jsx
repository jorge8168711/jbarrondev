import React from 'react';
import { useTranslation } from '../hooks';
import Socials from './Socials';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='flex flex-col items-center py-16 clip bg-black-25'>
        <figure className='w-40 mb-4'>
          <img
            className='rounded-full shadow-md'
            src='/img/profile.jpg'
            alt='Jorge Barrón Photograph'
          />
        </figure>

        <h1 className='m-0 mb-1 text-3xl font-bold text-yellow'>Jorge Barrón</h1>
        <p className='mb-1 text-xs font-normal'>Front-end developer</p>
        <p className='text-xs font-normal opacity-50'>Guadalajara, Jalisco</p>

        <div className='flex pt-4 text-light-gray'>
          <Socials />
        </div>
      </section>

      <section className='px-4 pt-12'>
        <header className='flex mb-6'>
          <span className='inline-block w-1 border-0 opacity-50 bg-yellow' />
          <h2 className='pl-5 text-2xl font-bold text-white'>{t('about').title}</h2>
        </header>

        <article className='font-sans leading-relaxed md:pl-6'>{t('about').content}</article>
      </section>

      <style jsx>
        {`
          .clip {
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
          }

          @media screen and (min-width: 768px) {
            .clip {
              margin-top: -34px;
            }
          }
        `}
      </style>
    </>
  );
};

export default AboutMe;
