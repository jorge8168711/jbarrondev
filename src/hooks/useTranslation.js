import { useContext } from 'react';
import AppContext from '../context';
import { strings, defaultLocale } from '../translations';

export default function useTranslation() {
  const { locale } = useContext(AppContext);

  function t(key) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || '';
  }

  return { t, locale };
}
