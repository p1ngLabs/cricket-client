import { Container, createStyles } from '@mantine/core';
import { Header, Footer, AuthModal } from '@/components';
import { Montserrat } from 'next/font/google';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

// const font = Montserrat({ weight: ['400', '600', '800', '900'], subsets: ['latin', 'vietnamese'] });

const useStyles = createStyles(() => ({
  main: {
    flex: 1,
    paddingTop: '5rem',
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header openModal={open} />
      <main className={classes.main}>
        <Container size="lg">{children}</Container>
      </main>
      <Footer />

      <AuthModal isModalOpen={opened} closeModal={close} />
    </>
  );
};

export default Layout;
