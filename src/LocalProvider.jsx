import React from 'react';
import { useRouter } from 'next/router';
import AppContext from './context';
import { isLocale } from './translations';

const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const { query } = useRouter();

  React.useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  React.useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return <AppContext.Provider value={{ locale, setLocale }}>{children}</AppContext.Provider>;
};

export default LocaleProvider;
