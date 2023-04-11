import { MdDashboard } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaListUl, FaUsers } from 'react-icons/fa';
import { BsCartCheckFill, BsGearFill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

export interface SidebarInterface {
  title: string;
  icon: IconType;
  url: string;
}

const sidebarContents: SidebarInterface[] = [
  {
    title: 'Tổng quan',
    icon: MdDashboard,
    url: '/admin',
  },
  {
    title: 'Sách',
    icon: ImBooks,
    url: '/admin/books',
  },
  {
    title: 'Danh mục sách',
    icon: FaListUl,
    url: '/admin/categories',
  },
  {
    title: 'Khách hàng',
    icon: FaUsers,
    url: '/admin/customers',
  },
  {
    title: 'Đơn hàng',
    icon: BsCartCheckFill,
    url: '/admin/orders',
  },
  {
    title: 'Cài đặt',
    icon: BsGearFill,
    url: '/admin/settings',
  },
];

export default sidebarContents;
