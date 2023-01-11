import NextLink from 'next/link';
import { ListItem, UnorderedList } from '@chakra-ui/react';

interface Navbar {
  title: string;
  url: string;
}

const navbarContents: Navbar[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Books',
    url: '/books',
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

const Navbar = () => {
  return (
    <UnorderedList styleType="none" className="hidden sm:flex items-center mr-auto">
      {navbarContents.map((item) => (
        <ListItem key={item.title}>
          <NextLink
            href={item.url}
            className="px-4 py-2 font-bold rounded text-white hover:text-gray-400"
          >
            {item.title.toUpperCase()}
          </NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Navbar;
