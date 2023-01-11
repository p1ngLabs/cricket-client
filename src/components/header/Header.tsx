import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Navbar, Searchbar } from '@components/index';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import cricketLogo from 'public/images/logo-white-transparent.png';

const Header = () => {
  return (
    <header id="header" className="bg-dark py-2">
      <div className="flex items-center container mx-auto">
        <div className="flex items-center mr-auto w-20 sm:w-20">
          <Image src={cricketLogo} className="pl-4 sm:pl-0" alt="logo" priority />
          <Navbar />
        </div>

        <div className="user-info flex items-center">
          <Searchbar />
          <List className="flex items-center gap-4 px-4 text-white">
            <ListItem className="flex items-center sm:hidden">
              <ListIcon as={FiSearch} fontSize="xl" />
            </ListItem>
            <ListItem className="flex items-center cursor-pointer">
              <ListIcon as={FiShoppingCart} fontSize="xl" />
            </ListItem>
            <ListItem className="flex items-center cursor-pointer">
              <ListIcon as={FiUser} fontSize="xl" />
            </ListItem>
            <ListItem className="flex items-center sm:hidden" fontSize="xl">
              <ListIcon as={GiHamburgerMenu} fontSize="xl" />
            </ListItem>
          </List>
        </div>
      </div>
    </header>
  );
};

export default Header;
