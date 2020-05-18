import React, { useState } from 'react';
import '../index.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider, langs } from '../app-context';

export default function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('en');
  setDefaultBreakpoints([{ sm: 640 }, { md: 768 }, { lg: 1024 }, { xl: 1280 }]);

  return (
    <BreakpointProvider>
      <Provider
        value={{
          lang,
          translations: langs[lang],
          setLanguage: (language) => setLang(language)
        }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    </BreakpointProvider>
  );
}
