import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoBlack from 'public/images/logo-black-transparent.png';
// import logoWhite from 'public/logo-white-transparent.png';
import sidebarContents from '@interfaces/SidebarAdmin';

const SidebarAdmin = () => {
  const router = useRouter();

  return (
    <aside className="relative w-64 pt-4 flex-shrink-0 overflow-y-auto hidden sm:block myBoxShadow">
      <div className="w-28 mx-auto">
        {/* TODO: logo changes with theme */}
        <Image src={logoBlack} alt="Logo" priority />
      </div>

      <ul className="mt-4">
        {sidebarContents.map((item) => {
          const SidebarIcon = item.icon;

          return (
            <li
              key={item.title}
              className={`relative font-bold ${
                router.pathname === item.url ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              {router.pathname === item.url && (
                <span className="absolute h-full left-0 top-0 w-1 rounded-r-lg bg-blue-500" />
              )}
              <NextLink href={item.url} className="block py-4 px-6">
                <>
                  <SidebarIcon className="inline mr-4 text-xl" />
                  {item.title}
                </>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SidebarAdmin;
