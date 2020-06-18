import React from 'react';

const Interests = () => {
  return (
    <>
      <h3 className='mt-6 mb-2 text-lg font-bold'>Mis intereses</h3>
      <div className='flex items-center text-white'>
        <svg className='w-12 h-12 opacity-75 fill-current'>
          <use href='/img/icons.svg#icon-esports' />
        </svg>
        <p className='ml-2 font-bold text-md text-yellow'>Videojuegos</p>

        <svg className='w-10 h-10 ml-10 opacity-75 fill-current'>
          <use href='/img/icons.svg#icon-design' />
        </svg>
        <p className='ml-2 font-bold text-yellow text-md'>Diseño e ilustración</p>

        <svg className='w-10 h-10 ml-10 opacity-75 fill-current'>
          <use href='/img/icons.svg#icon-tech' />
        </svg>
        <p className='ml-2 font-bold text-md text-yellow'>Tecnología</p>
      </div>
    </>
  );
};

export default Interests;
