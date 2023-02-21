'use client'

import useLocalStorageState from '../../lib/hooks/useLocalStorage'
import { createContext, useContext } from 'react'
import ThemePickerItem from './ThemePickerItem'
import { SwatchIcon } from '@heroicons/react/24/solid'

const AVAILABLE_THEMES = [
  { id: 'dark', name: 'Dracula' },
  { id: 'emerald', name: 'Emerald' },
]

const ThemeContext = createContext({ theme: 'dark', setTheme: (value: string) => value, themes: AVAILABLE_THEMES })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorageState('theme', 'dark')
  return <ThemeContext.Provider value={{ theme, setTheme, themes: AVAILABLE_THEMES }}>{children}</ThemeContext.Provider>
}

export default function ThemePicker() {
  const { theme, setTheme, themes } = useContext(ThemeContext)
  const handClick = (selectedTheme: string) => {
    setTheme(selectedTheme)
    document.documentElement.dataset.theme = selectedTheme
  }

  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <label
        tabIndex={0}
        className='btn btn-sm btn-ghost mb-1'>
        <SwatchIcon width={18} />
        <span className='normal-case ml-2'>Theme</span>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content card shadow bg-base-200 p-2'>
        {themes.map((t: { name: string; id: string }) => (
          <ThemePickerItem
            onClick={() => handClick(t.id)}
            selected={t.id === theme}
            key={t.id}
            id={t.id}
            label={t.name}
          />
        ))}
      </ul>
    </div>
  )
}
