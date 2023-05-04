import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@/client/utils/theme';
import { MantineProvider } from '@mantine/core';
import { DrawerProvider } from '@/client/contexts/DrawerContext';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </MantineProvider>
    </>
  );
};

export default App;
