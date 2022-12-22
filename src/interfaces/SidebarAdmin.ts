import { MdDashboard } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaListUl, FaUsers } from 'react-icons/fa';
import { BsCartCheckFill, BsGearFill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

interface SidebarType {
  title: string;
  icon: IconType;
  link: string;
}

const sidebarContents: SidebarType[] = [
  {
    title: 'Tổng quan',
    icon: MdDashboard,
    link: '/admin',
  },
  {
    title: 'Sách',
    icon: ImBooks,
    link: '/admin/books',
  },
  {
    title: 'Danh mục sách',
    icon: FaListUl,
    link: '/admin/categories',
  },
  {
    title: 'Khách hàng',
    icon: FaUsers,
    link: '/admin/customers',
  },
  {
    title: 'Đơn hàng',
    icon: BsCartCheckFill,
    link: '/admin/orders',
  },
  {
    title: 'Cài đặt',
    icon: BsGearFill,
    link: '/admin/settings',
  },
];

export default sidebarContents;
