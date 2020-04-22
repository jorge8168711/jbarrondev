import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
        <meta name='description' content='Resumen de mis proyectos a lo largo de mi carrera.' />
      </Head>

      <Layout>
        <p>PROYECTOS</p>
      </Layout>
    </>
  );
};

export default Projects;
