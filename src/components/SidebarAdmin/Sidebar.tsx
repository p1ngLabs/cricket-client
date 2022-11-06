import NextLink from 'next/link';
import Image from 'next/image';
import cricketLogo from '../../../public/logo-cricket.png';
import styles from '../../styles/_sidebarAdmin.module.css';
import { MdDashboard } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaListUl, FaUser, FaUsers } from 'react-icons/fa';
import { BsCartCheckFill, BsGearFill } from 'react-icons/bs';

type SidebarType = {
  title: string;
  icon: React.ReactNode;
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
  return (
    <aside className={`${styles.aside} pt-4 shadow-md shadow-gray-400`}>
      <NextLink href="/admin" className="block pl-6">
        <Image src={cricketLogo} alt="Logo" />
      </NextLink>

      <ul className="w-full mt-8">
        {sidebarNavContents.map((item) => (
          <li key={item.title} className="font-bold text-gray-500">
            <NextLink href={item.link} className="block py-4 px-6 ">
              <span className={`${styles.sidebarIcon} mr-4 text-xl`}>{item.icon}</span>
              <span className="sidebarTitle">{item.title}</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
