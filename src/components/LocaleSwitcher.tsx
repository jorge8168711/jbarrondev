import Link from 'next/link'
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import Image from 'next/image'

const LANG_NAMES = {
  es: 'Español',
  en: 'English',
}

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)

  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <label
        tabIndex={0}
        className='btn btn-sm btn-ghost'>
        <LanguageIcon
          className='mr-1'
          width={18}
        />
        <ChevronDownIcon width={18} />
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content card shadow bg-base-200 rounded p-0 w-32'>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li
              key={locale}
              className='px-4 py-2 flex items-center'>
              <Image
                className='mr-4'
                src={`/flags/${locale}.svg`}
                alt={LANG_NAMES[locale as keyof typeof LANG_NAMES]}
                width={15}
                height={15}
              />
              <Link
                className='btn btn-sm btn-ghost'
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior>
                {LANG_NAMES[locale as keyof typeof LANG_NAMES]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
