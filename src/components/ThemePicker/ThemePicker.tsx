import { createContext, useContext } from 'react'
import ThemePickerItem from './ThemePickerItem'
import { ChevronDownIcon, SwatchIcon } from '@heroicons/react/24/solid'
import useLocalStorageState from '../../hooks/useLocalStorage'

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
        className='btn btn-sm btn-ghost'>
        <SwatchIcon
          className='mr-1'
          width={18}
        />
        <ChevronDownIcon width={18} />
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
