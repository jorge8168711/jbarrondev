import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta name='description' content='Ponte en contacto conmigo.' />
      </Head>

      <Layout>
        <p>CONTACTO</p>
      </Layout>
    </>
  );
};

export default Contact;
