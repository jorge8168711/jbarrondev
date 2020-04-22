import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta
          name='description'
          content='Resumen de mis skills a lo largo de mi carrera como desarrollador.'
        />
      </Head>

      <Layout>SKILLS</Layout>
    </>
  );
};

export default Skills;
