import { NextPage } from 'next/types';
import { useContext, useEffect, useState } from 'react';
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import DrawerContext from 'src/contexts/DrawerContext';
import Layout from '@layouts/LayoutAdmin';
import { Loading, PageTitle, RowImageAdmin, RowActions, TablePagination } from '@components/index';
import Customer from '@interfaces/Customer';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { handleOpen, btnRef } = useContext(DrawerContext);

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
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    };

    if (isLoading) fetchUsers();
  }, []);

  return (
    <Layout>
      <PageTitle />

      {/* Action bar */}
      <div className="flex gap-4 bg-white px-4 py-4 my-6 rounded-md">
        <input
          type="search"
          name="search"
          id="search"
          className="w-5/6 border border-gray-200 bg-gray-100 px-4 py-2 rounded-md focus:bg-white focus:border-gray-200 focus:outline-none"
          placeholder="Search by username or email"
        />
        <button
          type="button"
          className="w-1/6 bg-blue-500 px-6 py-2 font-bold text-gray-100 text-center rounded-md"
          ref={btnRef}
          onClick={() => handleOpen('lg')}
        >
          TẢI XUỐNG
        </button>
      </div>
      {/* End of action bar */}

      <div className="w-full overflow-x-auto overflow-y-hidden">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <table className="min-w-full divide-y">
              <thead className="bg-gray-50">
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
            <TablePagination table={table} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default CustomerPage;
