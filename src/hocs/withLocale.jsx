/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Error from 'next/error';
import { getDisplayName } from 'next/dist/next-server/lib/utils';
import LocaleProvider from '../LocalProvider';
import { isLocale } from '../translations';

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx) => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined };
    }
    return { ...pageProps, locale: ctx.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
