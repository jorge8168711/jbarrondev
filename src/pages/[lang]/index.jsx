import React from 'react';
import Layout from '../../components/Layout';
import { withLocale } from '../../hocs';
import { AboutMe } from '../../components';

const IndexPage = () => {
  return (
    <Layout contentKey='about'>
      <AboutMe />
    </Layout>
  );
};

export default withLocale(IndexPage);
