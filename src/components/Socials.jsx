import React from 'react';

const Socials = () => {
  return (
    <>
      <a
        className='flex p-2 mr-4 rounded-full opacity-75 bg-primary hover:opacity-100'
        target='__blank'
        href='https://twitter.com/JorgeBarron28'>
        <svg className='w-4 h-4 fill-current'>
          <use href='/img/icons.svg#icon-twitter' />
        </svg>
      </a>

      <a
        className='flex p-2 mr-4 rounded-full opacity-75 bg-primary hover:opacity-100'
        target='__blank'
        href='https://www.linkedin.com/in/jorgebarrondev/'>
        <svg className='w-4 h-4 fill-current'>
          <use href='/img/icons.svg#icon-linkedin' />
        </svg>
      </a>

      <a
        className='flex p-2 mr-4 rounded-full opacity-75 bg-primary hover:opacity-100'
        target='__blank'
        href='https://github.com/jorge8168711'>
        <svg className='w-4 h-4 fill-current'>
          <use href='/img/icons.svg#icon-github' />
        </svg>
      </a>
    </>
  );
};

export default Socials;
