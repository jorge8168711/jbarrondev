import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';

const About = () => {
  return (
    <>
      <Head>
        <title>Acerca de este sitio</title>
        <meta
          name='description'
          content='Conjunto de tecnologías e información relacionada con el desarrollo de este sitio.'
        />
      </Head>

      <Layout>
        <p>ABOUT</p>
      </Layout>
    </>
  );
};

export default About;
