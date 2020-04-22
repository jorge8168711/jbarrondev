import React from 'react';
import '../index.css';

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
