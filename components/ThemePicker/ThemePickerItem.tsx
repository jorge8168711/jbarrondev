import React, { useEffect, useState } from 'react'

export default function ThemePickerItem({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: Function
}) {
  const [isSelected, setIsSelected] = useState(false)
  const className = isSelected ? 'bg-accent' : ''

  useEffect(() => setIsSelected(selected), [selected])

  return (
    <li
      onClick={() => onClick(label)}
      className={className}>
      {label}
    </li>
  )
}
