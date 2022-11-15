// import { MdNightlight, MdWbSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import avatar from '../../public/avatar.png';

const Header = () => {
  return (
    <header className="h-16 shadow-sm shadow-gray-400 z-10">
      <div className="container flex items-center justify-between px-6 h-full mx-auto text-blue-500">
        <GiHamburgerMenu className="cursor-pointer text-lg lg:hidden" />
        <div className="flex items-center ml-auto space-x-6">
          {/* TODO: make toggle dark mode */}
          {/* <button type="button" className="text-xl">
            <MdNightlight />
          </button>
          <button type="button" className="text-xl">
            <MdWbSunny />
          </button> */}
          <button type="button" className="rounded-full w-10 h-10 bg-blue-500">
            <Image src={avatar} className="rounded-full" alt="profile" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
