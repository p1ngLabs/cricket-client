import ICustomer from '@/@types/schemas/customer.schema';
import { Button, Flex, MediaQuery, createStyles, Text, Select } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from 'react-icons/hi';

const useStyles = createStyles((theme) => ({
  paginationBtn: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    paddingInline: theme.spacing.sm,
    paddingBlock: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
  },
}));

const TablePagination = ({ table }: { table: Table<ICustomer> }) => {
  const { classes } = useStyles();
  return (
    <Flex
      align="center"
      justify="space-between"
      sx={(theme) => ({
        paddingInline: theme.spacing.sm,
        paddingBlock: theme.spacing.xs,
      })}
    >
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        {/* Mobile navigations */}
        <Flex justify="space-between" style={{ flex: 1 }}>
          <Button
            color="dark"
            className={classes.paginationBtn}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            color="dark"
            className={classes.paginationBtn}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            ml="xs"
          >
            Next
          </Button>
        </Flex>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Flex align="center" justify="space-between" style={{ flex: 1 }}>
          {/* Left paginations */}
          <Flex align="center" gap="sm">
            <Text span>
              Page{' '}
              <strong>
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </Text>
            <Select
              value={String(table.getState().pagination.pageSize)}
              placeholder={`Show ${String(table.getState().pagination.pageSize)}`}
              sx={(theme) => ({ fontSize: theme.fontSizes.sm })}
              onChange={(e) => {
                table.setPageSize(Number(e?.split(' ')[1]));
              }}
              data={['Show 10', 'Show 20', 'Show 30']}
            />
          </Flex>
          {/* End of left paginations */}

          {/* Right pagination */}
          <Button.Group aria-label="Pagination">
            <Button
              color="dark"
              leftIcon={<HiChevronDoubleLeft aria-hidden="true" />}
              className={classes.paginationBtn}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              First
            </Button>
            <Button
              color="dark"
              leftIcon={<HiChevronLeft aria-hidden="true" />}
              className={classes.paginationBtn}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              color="dark"
              rightIcon={<HiChevronRight aria-hidden="true" />}
              className={classes.paginationBtn}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
            <Button
              color="dark"
              rightIcon={<HiChevronDoubleRight aria-hidden="true" />}
              className={classes.paginationBtn}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              Last
            </Button>
          </Button.Group>
          {/* End of right pagination */}
        </Flex>
      </MediaQuery>
    </Flex>
  );
};

export default TablePagination;
