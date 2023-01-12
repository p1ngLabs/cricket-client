import Image from 'next/image';
import { Navbar, Searchbar, HamburgerMenu } from '@components/index';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import cricketLogo from 'public/images/logo-white-transparent.png';

const Header = () => {
  return (
    <header id="header" className="bg-cricket_dark py-2">
      <div className="flex items-center sm:w-5/6 mx-auto">
        <div className="flex items-center mr-auto w-20 sm:w-20">
          <Image src={cricketLogo} className="mr-2 pl-4 sm:pl-0" alt="logo" priority />
          <Navbar />
        </div>

        <div className="user-info flex items-center sm:w-1/3">
          <Searchbar />
          <ul className="flex items-center gap-5 px-4 text-white">
            <li className="flex items-center text-2xl sm:hidden">
              <FiSearch />
            </li>
            <li className="flex items-center text-2xl cursor-pointer">
              <FiShoppingCart />
            </li>
            <li className="flex items-center text-2xl cursor-pointer">
              <FiUser />
            </li>
            <li className="flex items-center sm:hidden">
              <HamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
