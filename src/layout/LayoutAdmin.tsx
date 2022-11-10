import Head from 'next/head';
import { Header, Sidebar } from '../components/index';

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex h-screen">
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME}</title>
      </Head>

      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        <main className="bg-gray-100 h-full overflow-y-auto">
          <div className="container mx-auto px-6 py-10">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
