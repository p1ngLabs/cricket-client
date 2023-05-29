import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Layout from '@/components/admin/layout/Layout';
import Loader from '@/components/Loader';
import PageTitle from '@/components/admin/PageTitle';
import RowImage from '@/components/admin/table/RowImage';
import RowActions from '@/components/admin/table/RowActions';
import TablePagination from '@/components/admin/table/TablePagination';
import ICustomer from '@/types/schemas/customer.schema';
import { sidebarItems } from '@/components/admin/layout/MainLinks';
import { Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  tableWrapper: {
    overflowX: 'auto',
    overflowY: 'hidden',
    marginInline: 'auto',
    backgroundColor: '#fff',
    border: `1px solid ${theme.colors.gray[2]}`,
    borderRadius: theme.radius.md,
  },
  table: {
    width: '100%',
    backgroundColor: '#fff',
  },
  thead: {
    color: theme.colors.gray[8],
  },
  th: {
    padding: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textAlign: 'start',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
  tbody: {
    fontSize: theme.fontSizes.sm,
  },
  td: {
    paddingInline: theme.spacing.xs,
    whiteSpace: 'nowrap',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
}));

const columnHelper = createColumnHelper<ICustomer>();
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
    cell: (info) => <RowImage imgSrc={info.getValue()} />,
  }),
  columnHelper.display({
    header: 'actions',
    cell: () => <RowActions />,
  }),
];

const CustomerPage: NextPage = () => {
  const { classes } = useStyles();
  const [data, setData] = useState<ICustomer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pageTitle = sidebarItems.find((item) => item.url === router.pathname)?.label;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3001/v1/users`);
        const customers = await res.json();
        setData(customers);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (isLoading) fetchUsers();
  }, []);

  return (
    <>
      <Layout>
        <Container size="xl">
          <PageTitle title={pageTitle} />
        </Container>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Container size="xl" className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead className={classes.thead}>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} scope="col" className={classes.th}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className={classes.tbody}>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className={classes.td}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <TablePagination table={table} />
            </Container>
          </>
        )}
      </Layout>
    </>
  );
};

export default CustomerPage;
