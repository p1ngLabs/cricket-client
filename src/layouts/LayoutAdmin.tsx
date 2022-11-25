import Head from 'next/head';
import { ReactNode } from 'react';
import { Header, Sidebar } from '../components/index';

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <div className="flex h-screen">
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>

      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        <main className="bg-gray-100 h-full overflow-y-auto">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
