import { NextPage } from 'next/types';
import Layout from '@layouts/LayoutAdmin';
import { CategoryDrawer, PageTitle } from '@components/index';

const CategoryPage: NextPage = () => {
  return (
    <Layout>
      <CategoryDrawer />
      <PageTitle />
    </Layout>
  );
};

export default CategoryPage;
