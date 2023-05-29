import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  AppShell,
  Box,
  Flex,
  Group,
  Menu,
  Navbar,
  Text,
  useMantineTheme,
  Header,
  MediaQuery,
  Burger,
  Title,
} from '@mantine/core';
import MainLinks from './MainLinks';
import { IoMdLogOut, IoMdSettings } from 'react-icons/io';
import avatar from 'public/images/avatar.png';
import cricketLogo from 'public/images/logo-black-transparent.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      fixed={true}
      header={
        <Header height={60} p="xs">
          <Flex align="center" gap="xs" sx={{ height: '100%' }}>
            <Box>
              <Image src={cricketLogo} width={50} alt="logo" />
            </Box>
            <Title
              order={1}
              sx={(theme) => ({
                fontSize: theme.fontSizes.xl,
                [theme.fn.smallerThan('md')]: {
                  fontSize: theme.fontSizes.lg,
                },
              })}
            >
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Title>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={theme.colors.gray[6]}
                ml="auto"
                mr="xs"
              />
            </MediaQuery>
          </Flex>
        </Header>
      }
      navbar={
        <Navbar px="xs" pt="xs" hidden={!opened} hiddenBreakpoint="sm" width={{ sm: 250, md: 300 }}>
          <Navbar.Section grow>
            <MainLinks />
          </Navbar.Section>

          <Navbar.Section>
            <Menu position="top-start" offset={3}>
              <Menu.Target>
                <Group
                  style={{ cursor: 'pointer' }}
                  sx={(theme) => ({
                    paddingBlock: theme.spacing.md,
                    borderTop: `1px solid ${theme.colors.gray[2]}`,
                  })}
                >
                  <Image src={avatar} width={50} style={{ borderRadius: '50%' }} alt="avatar" />
                  <Box>
                    <Text fw="bold" m={0}>
                      Admin
                    </Text>
                    <Text color="dimmed">admin@gmail.com</Text>
                  </Box>
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IoMdSettings size="1.2rem" />}>
                  <Text component={Link} href="/admin/settings">
                    Settings
                  </Text>
                </Menu.Item>
                <Menu.Item icon={<IoMdLogOut size="1.2rem" />}>Log Out</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({ main: { backgroundColor: theme.colors.gray[0] } })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
