import React from 'react'
import ThemePicker from '../ThemePicker/ThemePicker'

export default function MainHeader() {
  return (
    <header className='bg-base-300 shadow-sm px-4 py-2'>
      <div className='flex align-center container mx-auto'>
        <div className='mr-auto'></div>
        <ThemePicker />
      </div>
    </header>
  )
}
