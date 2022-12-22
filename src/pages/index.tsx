import { NextPage } from 'next/types';
import Head from 'next/head';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

const currentYear = new Date().getFullYear();

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    console.log(session.user);
  }

  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {session ? (
          <>
            <p>Signed in as {session.user?.email}</p>
            <Button colorScheme="orange" onClick={() => signOut()}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <p>You are not signed in</p>
            <Button colorScheme="teal" onClick={() => signIn()}>
              Sign In
            </Button>
          </>
        )}
        <br />
        <Link href="/admin">
          <Button colorScheme="blue">ADMIN PANEL</Button>
        </Link>
      </main>

      <footer>the cricket project &copy; {currentYear}</footer>
    </div>
  );
};

export default Home;
