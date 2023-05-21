import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from 'react-icons/hi';

const TablePagination = (props: any) => {
  const { table } = props;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 rounded-b-md bg-white px-4 py-3 sm:px-6">
      {/* Mobile paginations */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50"
        >
          Next
        </button>
      </div>
      {/* End of mobile paginations */}

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        {/* Left paginations */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
          <select
            value={table.getState().pagination.pageSize}
            className="text-sm focus:outline-none cursor-pointer"
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        {/* End of left paginations */}

        {/* Right paginations */}
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="relative inline-flex items-center p-2 border border-gray-300 text-sm font-medium rounded-l-md text-gray-700 bg-white hover:bg-blue-50"
          >
            <span className="sr-only">First</span>
            <HiChevronDoubleLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="relative inline-flex items-center p-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-blue-50"
          >
            <span className="sr-only">Previous</span>
            <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="relative inline-flex items-center p-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-blue-50"
          >
            <span className="sr-only">Next</span>
            <HiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="relative inline-flex items-center p-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-blue-50"
          >
            <span className="sr-only">Last</span>
            <HiChevronDoubleRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
        {/* End of right paginations */}
      </div>
    </div>
  );
};

export default TablePagination;
