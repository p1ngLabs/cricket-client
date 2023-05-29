import { ThemeIcon, UnstyledButton, Text, Box, createStyles } from '@mantine/core';
import Link from 'next/link';
import { BsCartCheckFill } from 'react-icons/bs';
import { FaListUl, FaUsers } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
  to: string;
}

const useStyles = createStyles(() => ({
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  },
}));

export const sidebarItems = [
  {
    label: 'Dashboard',
    icon: <MdDashboard />,
    url: '/admin',
  },
  {
    label: 'Books',
    icon: <ImBooks />,
    url: '/admin/books',
  },
  {
    label: 'Categories',
    icon: <FaListUl />,
    url: '/admin/categories',
  },
  {
    label: 'Customers',
    icon: <FaUsers />,
    url: '/admin/customers',
  },
  {
    label: 'Orders',
    icon: <BsCartCheckFill />,
    url: '/admin/orders',
  },
];

export const NavLink = ({ icon, label, color, to }: NavLinkProps) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton
      component={Link}
      href={to}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        '&:hover': {
          backgroundColor: theme.colors.gray[0],
        },
      })}
    >
      <Box className={classes.navItem} fz="lg">
        <ThemeIcon variant="light" color={color} size="lg">
          {icon}
        </ThemeIcon>

        <Text size="sm" span>
          {label}
        </Text>
      </Box>
    </UnstyledButton>
  );
};

const MainLinks = () => {
  return (
    <>
      {sidebarItems.map((item) => (
        <NavLink key={item.label} icon={item.icon} label={item.label} to={item.url} />
      ))}
    </>
  );
};

export default MainLinks;
