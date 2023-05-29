import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Menu,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from './Banner';
import cricketLogo from 'public/images/logo-white-transparent.png';
import Link from 'next/link';
import { BiUserCircle, BiCartAlt, BiSearchAlt2 } from 'react-icons/bi';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.dark[7] : theme.colors.dark[1],
    opacity: 0.8,
    paddingBlock: '.5rem',
  },
  logo: {
    width: '4rem',
    marginRight: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    [theme.fn.largerThan('xs')]: {
      paddingLeft: 0,
    },
  },
  search: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  signin: {
    cursor: 'pointer',
    gap: '.5rem',
  },
}));

interface HeaderProps {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <>
      <Box component="header" className={classes.header}>
        <Container size="lg">
          <Flex align="center" justify="space-between" pos="relative">
            <Link href="/" className={classes.logo}>
              <Image src={cricketLogo} width={65} alt="logo" priority />
            </Link>
            <TextInput
              type="search"
              icon={<BiSearchAlt2 />}
              placeholder="Search by title, author"
              miw={500}
              className={classes.search}
              sx={(theme) => ({
                [theme.fn.smallerThan('sm')]: {
                  display: 'none',
                },
              })}
            />
            <Group>
              {/* <Menu position="bottom-start" shadow="md">
                  <Menu.Target>
                    <UnstyledButton c="white" fw="bold">
                      {session.user?.name}
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>
                      <UnstyledButton component={Link} href="/profile">
                        Profile
                      </UnstyledButton>
                    </Menu.Item>
                    <Menu.Item onClick={() => signOut()}>Log out</Menu.Item>
                  </Menu.Dropdown>
                </Menu> */}
              <Flex onClick={openModal} align="center" className={classes.signin} c="white">
                <Text span fz={30} display="flex">
                  <BiUserCircle />
                </Text>
                <Text span>Log in</Text>
              </Flex>
              <Divider size="sm" orientation="vertical" />
              <Text component={Link} href="#" c="white" fz={30} display="flex">
                <BiCartAlt />
              </Text>
            </Group>
          </Flex>

          <Navbar />
        </Container>
      </Box>
      {router.pathname === '/' && <Banner />}
    </>
  );
};

export default Header;
