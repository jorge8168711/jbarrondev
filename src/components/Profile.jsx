import React from 'react';
import Socials from './Socials';

const Profile = () => {
  return (
    <>
      <figure className='w-40 mb-4'>
        <img className='rounded-full shadow' src='/img/profile.jpg' alt='Jorge Barrón Photograph' />
      </figure>

      <h2 className='m-0 mb-1 text-xl font-bold text-yellow'>Jorge Barrón</h2>
      <p className='mb-1 text-xs font-normal'>Front-end developer</p>
      <p className='text-xs font-normal opacity-50'>Guadalajara, Jalisco</p>

      <div className='flex pt-4 text-light-gray'>
        <Socials />
      </div>
    </>
  );
};

export default Profile;
