import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const currentYear = new Date().getFullYear();

const Home = () => {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME}</title>
        <meta name='description' content='Thư viện cho bạn và cho tôi...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Link href='/admin/index'>
          <Button colorScheme='blue'>ADMIN PANEL</Button>
        </Link>
      </main>

      <footer>the cricket project &copy; {currentYear}</footer>
    </div>
  );
};

export default Home;
