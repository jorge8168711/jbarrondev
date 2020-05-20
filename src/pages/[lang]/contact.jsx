import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components';
import { withLocale } from '../../hocs';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta name='description' content='Ponte en contacto conmigo.' />
      </Head>

      <Layout contentKey='contact'>
        <p>CONTACTO</p>
      </Layout>
    </>
  );
};

export default withLocale(Contact);
