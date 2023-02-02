import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DrawerProvider } from 'src/contexts/DrawerContext';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </SessionProvider>
  );
};

export default App;
