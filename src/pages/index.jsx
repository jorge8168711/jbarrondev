/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getInitialLocale } from '../translations';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name='robots' content='noindex, nofollow' />
    </Head>
  );
}
