import Head from 'next/head';
import Sidebar from '../SidebarAdmin/Sidebar';
import Header from '../HeaderAdmin/Header';
import { Flex } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <Flex h="100vh">
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME}</title>
      </Head>

      <Sidebar />

      <main className="w-full">
        <Header />
        <section>{children}</section>
      </main>
    </Flex>
  );
};

export default Layout;
