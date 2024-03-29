import Link from 'next/link';
import { Center, createStyles } from '@mantine/core';

interface NavbarInterface {
  title: string;
  url: string;
}

const navbarContents: NavbarInterface[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Categories',
    url: '/categories',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

const useStyles = createStyles((theme) => ({
  navList: {
    gap: theme.spacing.md,
    alignItems: 'center',
    overflowX: 'auto',
  },
  navItems: {
    display: 'inline-block',
    fontWeight: 'bold',
    paddingBlock: `${theme.spacing.xs}`,
    paddingInline: `${theme.spacing.md}`,
    color: 'white',
    '&:hover': {
      color: 'gray',
    },
    [theme.fn.smallerThan('sm')]: {
      paddingInline: `${theme.spacing.xs}`,
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Center component="nav" className={classes.navList}>
      {navbarContents.map((item) => (
        <Link href={item.url} key={item.title} className={classes.navItems}>
          {item.title.toLocaleUpperCase()}
        </Link>
      ))}
    </Center>
  );
};

export default Navbar;
