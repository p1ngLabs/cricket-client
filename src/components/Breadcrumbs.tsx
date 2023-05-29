import { Breadcrumbs, Text } from '@mantine/core';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string | string[] | undefined;
}

const MyBreadcrumbs = ({ currentPage }: BreadcrumbsProps) => {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Category', href: '/' },
    { title: currentPage, href: '#' },
  ].map((item, index) => (
    <Text key={index} component={Link} href={item.href}>
      {item.title}
    </Text>
  ));

  return <Breadcrumbs mb={16}>{items}</Breadcrumbs>;
};

export default MyBreadcrumbs;
