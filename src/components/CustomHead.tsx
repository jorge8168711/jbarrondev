import Head from 'next/head';
import { EN, ES } from '../lib/constants';

type CustomHeadProps = {
  metaTitle: string;
  metaDescription: string;
  previewImgUrl: string;
  locale: string;
  pathname: string;
  defaultLocale?: string;
};

export default function CustomHead({
  metaTitle,
  metaDescription,
  previewImgUrl,
  locale,
  pathname,
  defaultLocale,
}: CustomHeadProps) {
  const getPageUrl = (lang: string) => {
    const localeUrl = lang === defaultLocale ? '' : `/${lang}`;
    return `${process.env.NEXT_PUBLIC_URL}${localeUrl}${pathname}`;
  };

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      <link rel="alternate" hrefLang="en-us" href={getPageUrl(EN)} />
      <link rel="alternate" hrefLang="es-mx" href={getPageUrl(ES)} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={getPageUrl(locale)} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={previewImgUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={getPageUrl(locale)} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={previewImgUrl} />
    </Head>
  );
}
