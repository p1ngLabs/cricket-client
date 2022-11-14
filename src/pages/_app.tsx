import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import type { AppProps } from 'next/app';
import { DrawerProvider } from '../contexts/DrawerContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </ChakraProvider>
  );
};

export default App;
