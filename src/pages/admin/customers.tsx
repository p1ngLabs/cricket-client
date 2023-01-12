import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Layout from '@layouts/LayoutAdmin';
import { Loader, PageTitle, RowImageAdmin, RowActions, TablePagination } from '@components/index';
import Customer from '@interfaces/Customer';
import sidebarContents from '@interfaces/SidebarAdmin';

const columnHelper = createColumnHelper<Customer>();
const columns = [
  columnHelper.accessor('id', {
    header: '#',
  }),
  columnHelper.accessor('username', {
    header: 'username',
  }),
  columnHelper.accessor('email', {
    header: 'email',
  }),
  columnHelper.accessor('phone', {
    header: 'phone',
  }),
  columnHelper.accessor('avatar', {
    header: 'avatar',
    cell: (info) => <RowImageAdmin imgSrc={info.getValue()} />,
  }),
  columnHelper.display({
    header: 'actions',
    cell: () => <RowActions />,
  }),
];

const CustomerPage: NextPage = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pageTitle = sidebarContents.find((item) => item.url === router.pathname)?.title;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch('/api/customers')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    };

    if (isLoading) fetchUsers();
  }, []);

  return (
    <>
      <Layout>
        <PageTitle title={pageTitle} />

        {/* Action bar */}
        <div className="flex gap-4 bg-white px-4 py-4 my-6 rounded-md myBoxShadow">
          <input
            type="search"
            id="search"
            name="search"
            className="input input-bordered w-5/6 bg-gray-100 focus:outline-none bg-gray"
            placeholder="Search by username or email"
          />
          <button type="button" className="btn w-1/6 text-lg uppercase">
            Thêm
          </button>
        </div>
        {/* End of action bar */}

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full overflow-x-auto overflow-y-hidden myBoxShadow">
              <table className="min-w-full divide-y">
                <thead className="text-gray-500">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="py-2 px-4 whitespace-nowrap">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <TablePagination table={table} />
          </>
        )}
      </Layout>
    </>
  );
};

export default CustomerPage;
