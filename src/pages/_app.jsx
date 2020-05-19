import React, { useState } from 'react';
import '../index.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider, langs } from '../app-context';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

setDefaultBreakpoints([{ sm: 0 }, { md: 768 }, { lg: 1024 }, { xl: 1280 }]);

export default function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('es');

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
