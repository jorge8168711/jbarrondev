import React from 'react';
import { useTranslation } from '../hooks';
import Profile from './Profile';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className='px-6 mt-12 md:flex'>
      <section className='flex flex-col items-center py-4'>
        <Profile />
      </section>

      <section className='pl-0 mt-8 md:pl-10 md:mt-0'>
        <header className='mb-4'>
          <h1 className='text-2xl font-bold text-white'>{t('about').title}</h1>
          <span className='inline-block w-20 h-1 border-0 opacity-50 bg-yellow' />
        </header>

        <article className='font-sans leading-relaxed'>
          {t('about').content}

          <h3 className='text-lg font-bold text-white'>Mis intereses</h3>
          <p>Videojuegos</p>
          <p>Diseño e ilustración</p>
          <p>Tecnología</p>
        </article>
      </section>
    </div>
  );
};

export default AboutMe;
