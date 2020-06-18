import React from 'react';
import Socials from './Socials';
import { useTranslation } from '../hooks';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='px-4 pt-24 bg-black-15 Bg md:px-6 md:pt-0'>
        <div className='flex flex-col-reverse items-center justify-end max-w-screen-lg min-h-screen mx-auto md:justify-center md:flex-row'>
          <div className='pt-10 md:flex-1 md:pt-0'>
            <h1 className='relative inline-block m-0 font-sans text-3xl font-bold leading-none text-white sm:text-4xl lg:text-5xl'>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              JORGE BARRÓN <span className='Mark' />
            </h1>
            <h2 className='mt-2 mb-8 font-sans text-xl font-light font-bold text-yellow'>
              Desarrollador Web
            </h2>
            <p className='mb-8 font-light leading-relaxed opacity-75 text-md'>
              Soy desarrollador con experiencia en diseño e ilustración digital enfocado
              principalmente tecnologías Front-end.
            </p>

            <button
              className='px-6 py-2 mr-4 font-sans font-bold border rounded shadow-md bg-yellow text-primary'
              type='button'>
              Descargar CV
            </button>

            <button
              className='px-6 py-2 font-sans font-bold border rounded text-yellow'
              type='button'>
              Contacto
            </button>

            <div className='flex mt-12'>
              <Socials />
            </div>
          </div>

          <div className='pl-0 md:flex-1 md:pl-12 lg:pl-32'>
            <img
              className='w-40 rounded-full shadow-lg md:w-auto'
              src='/img/profile.jpg'
              alt='Jorge Barrón Photograph'
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes blink {
            from,
            to {
              background-color: transparent;
            }
            50% {
              background-color: #ffd866;
            }
          }

          .Mark {
            position: absolute;
            left: calc(100% + 20px);
            background-color: transparent;
            height: 100%;
            width: 10px;
            animation: blink 1s linear infinite;
          }

          .Bg {
            background: linear-gradient(90deg, #191d20 21px, transparent 1%) center,
              linear-gradient(#191d20 21px, transparent 1%) center, #565656;
            background-size: 22px 22px;
          }
        `}
      </style>
    </>
  );
};

export default Profile;
