import React from 'react';
import Layout from '../../components/Layout';
import { withLocale } from '../../hocs';
import { Profile } from '../../components';

const IndexPage = () => {
  return (
    <Layout contentKey='about'>
      <Profile />
    </Layout>
  );
};

export default withLocale(IndexPage);
