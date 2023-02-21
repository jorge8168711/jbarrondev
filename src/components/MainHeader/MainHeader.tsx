import React from 'react'
import LocaleSwitcher from '../LocaleSwitcher'
import ThemePicker from '../ThemePicker/ThemePicker'

export default function MainHeader() {
  return (
    <header className='bg-base-300 shadow-sm py-2'>
      <div className='flex items-center container mx-auto px-6'>
        <div className='mr-auto'></div>
        <ThemePicker />
        <LocaleSwitcher />
      </div>
    </header>
  )
}
