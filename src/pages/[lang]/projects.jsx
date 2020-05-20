import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components';
import { withLocale } from '../../hocs';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
        <meta name='description' content='Resumen de mis proyectos a lo largo de mi carrera.' />
      </Head>

      <Layout contentKey='projects'>
        <p>PROYECTOS</p>
      </Layout>
    </>
  );
};

export default withLocale(Projects);
