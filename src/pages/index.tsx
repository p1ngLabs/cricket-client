import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME}</title>
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/admin">
          <Button colorScheme="teal">ADMIN PANEL</Button>
        </Link>
      </main>

      <footer>the cricket project &copy; 2022</footer>
    </div>
  );
};

export default Home;
