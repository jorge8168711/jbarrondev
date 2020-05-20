/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../index.css';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

setDefaultBreakpoints([{ sm: 0 }, { md: 768 }, { lg: 1024 }, { xl: 1280 }]);

export default function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}
