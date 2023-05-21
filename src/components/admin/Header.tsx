import Image from 'next/image';
import avatar from 'public/images/avatar.png';

const Header = () => {
  return (
    <header className="h-16 custom-box-shadow z-10">
      <div className="flex items-center justify-between px-6 h-full mx-auto text-blue-500">
        <div className="flex items-center ml-auto space-x-6">
          <button type="button" className="rounded-full w-10 h-10 bg-blue-500">
            <Image src={avatar} className="rounded-full" alt="profile" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
