import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

type ThemePickerItemProps = {
  id: string
  label: string
  selected: boolean
  onClick: Function
}

export default function ThemePickerItem({ label, id, selected, onClick }: ThemePickerItemProps) {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => setIsSelected(selected), [selected])

  return (
    <li
      data-theme={id}
      onClick={() => onClick(label)}
      className='cursor-pointer py-3 pr-3 bg-base-100 rounded-lg mb-2'>
      <div className='flex items-center text-base-content pl-4'>
        <CheckIcon
          width={16}
          className={isSelected ? 'visible opacity-100 transition-all' : 'invisible opacity-0 transition-all'}
        />
        <div className='ml-2 text-sm font-bold w-24'>{label}</div>
        <div className='flex items-center gap-1 ml-auto'>
          <div className='bg-primary w-3 h-3 rounded'></div>
          <div className='bg-secondary w-3 h-3 rounded'></div>
          <div className='bg-accent w-3 h-3 rounded'></div>
          <div className='bg-neutral w-3 h-3 rounded'></div>
        </div>
      </div>
    </li>
  )
}
