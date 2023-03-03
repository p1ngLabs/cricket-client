import Head from 'next/head';
import { ReactNode } from 'react';
import { Header, Footer, LoginModal } from '@components/index';
import { Montserrat } from '@next/font/google';

const font = Montserrat({ weight: ['400', '600', '800', '900'], subsets: ['latin', 'vietnamese'] });

const Layout = (props: { isHomepage?: boolean; children: ReactNode }) => {
  const { isHomepage, children } = props;

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-col min-h-screen w-full ${font.className}`}>
        <Header />
        <main className={`flex-1 ${isHomepage || 'container mx-auto'} pt-16 text-sm`}>
          {children}
        </main>
        <Footer />
      </div>

      <LoginModal />
    </>
  );
};

export default Layout;
