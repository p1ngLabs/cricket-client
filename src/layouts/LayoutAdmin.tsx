import Head from 'next/head';
import { ReactNode } from 'react';
import { HeaderAdmin, SidebarAdmin } from '@components/index';

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <div className="flex h-screen">
        <SidebarAdmin />
        <div className="flex flex-col w-full">
          <HeaderAdmin />
          <main className="bg-gray-100 h-full overflow-y-auto">
            <div className="container mx-auto p-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
