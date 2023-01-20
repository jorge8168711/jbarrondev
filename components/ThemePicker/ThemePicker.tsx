'use client'

import useLocalStorageState from '../../lib/hooks/useLocalStorage'
import { ColorSwitch } from '@carbon/icons-react'
import { createContext, useContext } from 'react'
import ThemePickerItem from './ThemePickerItem'

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
        className='btn btn-square btn-ghost mb-1'>
        <ColorSwitch size={24} />
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content card w-64 shadow bg-base-100'>
        {themes.map((t: { name: string; id: string }) => (
          <ThemePickerItem
            onClick={() => handClick(t.id)}
            selected={t.id === theme}
            key={t.id}
            label={t.name}
          />
        ))}
      </ul>
    </div>
  )
}
