import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DrawerProvider } from '../contexts/DrawerContext';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
