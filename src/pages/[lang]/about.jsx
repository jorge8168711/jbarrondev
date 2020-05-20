import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components';
import { withLocale } from '../../hocs';

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

      <Layout contentKey='websiteAbout'>
        <p>ABOUT</p>
      </Layout>
    </>
  );
};

export default withLocale(About);
