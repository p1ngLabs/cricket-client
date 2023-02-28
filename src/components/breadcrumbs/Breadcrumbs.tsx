import Link from 'next/link';
import { memo } from 'react';

const Breadcrumbs = (props: { currentPage: string | string[] | undefined }) => {
  const { currentPage } = props;

  return (
    <div className="text-sm breadcrumbs mt-4">
      <ul>
        <li className="text-blue-500">
          <Link href="/">Home</Link>
        </li>
        <li className="text-blue-500">
          <Link href="#">Category</Link>
        </li>
        <li className="opacity-80">{currentPage}</li>
      </ul>
    </div>
  );
};

export default memo(Breadcrumbs);
