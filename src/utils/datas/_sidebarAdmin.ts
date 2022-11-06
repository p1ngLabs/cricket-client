import { MdDashboard } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaListUl, FaUser, FaUsers } from 'react-icons/fa';
import { BsCartCheckFill, BsGearFill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

type SidebarType = {
  title: string;
  icon: IconType;
  link: string;
};

const sidebarNavContents: SidebarType[] = [
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
    title: 'Nhân viên',
    icon: FaUser,
    link: '/admin/staffs',
  },
  {
    title: 'Cài đặt',
    icon: BsGearFill,
    link: '/admin/settings',
  },
];

export default sidebarNavContents;
