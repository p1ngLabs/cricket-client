import NextLink from 'next/link';
import Image from 'next/image';
import cricketLogo from '../../../public/logo-cricket.png';
import styles from '../../styles/_sidebarAdmin.module.css';
import { MdDashboard } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaListUl, FaUser, FaUsers } from 'react-icons/fa';
import { BsCartCheckFill, BsGearFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

type SidebarType = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const sidebarNavContents: SidebarType[] = [
  {
    title: 'Tổng quan',
    icon: <MdDashboard />,
    link: '/admin',
  },
  {
    title: 'Sách',
    icon: <ImBooks />,
    link: '/admin/books',
  },
  {
    title: 'Danh mục sách',
    icon: <FaListUl />,
    link: '/admin/categories',
  },
  {
    title: 'Khách hàng',
    icon: <FaUsers />,
    link: '/admin/customers',
  },
  {
    title: 'Đơn hàng',
    icon: <BsCartCheckFill />,
    link: '/admin/orders',
  },
  {
    title: 'Nhân viên',
    icon: <FaUser />,
    link: '/admin/staffs',
  },
  {
    title: 'Cài đặt',
    icon: <BsGearFill />,
    link: '/admin/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={`${styles.aside} pt-4 shadow-md shadow-gray-400 relative`}>
      <Image src={cricketLogo} className="mx-auto" alt="Logo" />

      <ul className="w-full mt-8">
        {sidebarNavContents.map((item) => (
          <li
            key={item.title}
            className={`relative font-bold ${
              router.pathname === item.link ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            <NextLink href={item.link} className="block py-4 px-6">
              {router.pathname === item.link && (
                <span className="absolute h-full left-0 top-0 w-1 rounded-r-lg bg-blue-500" />
              )}
              <span className={`${styles.sidebarIcon} mr-4 text-xl`}>{item.icon}</span>
              {item.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
