import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cricketLogo from '../../../public/logo-cricket.png';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import sidebarNavContents from '../../utils/datas/sidebarAdmin';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="relative w-64 pt-4 shadow-md shadow-gray-400 flex-shrink-0">
      <Image src={cricketLogo} className="mx-auto" alt="Logo" />

      <List className="mt-8">
        {sidebarNavContents.map((item) => (
          <ListItem
            key={item.title}
            className={`relative font-bold ${
              router.pathname === item.link ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            {router.pathname === item.link && (
              <span className="absolute h-full left-0 top-0 w-1 rounded-r-lg bg-blue-500" />
            )}
            <NextLink href={item.link} className="block py-4 px-6">
              <ListIcon as={item.icon} className="text-xl" />
              {item.title}
            </NextLink>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default Sidebar;
