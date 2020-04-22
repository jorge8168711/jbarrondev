import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&family=Lato:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body className='font-mono bg-primary text-light-gray'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
