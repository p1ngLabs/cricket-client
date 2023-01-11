import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { Footer } from '@components/index';

const Header = dynamic(() => import('@components/header/Header'), {
  ssr: false,
});

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-1 container mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
