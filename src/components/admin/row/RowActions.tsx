import { ReactNode } from 'react';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const RowButton = (props: { children?: ReactNode; title: 'View' | 'Edit' | 'Delete' }) => {
  const { children, title } = props;

  return (
    <div className="tooltip" data-tip={title}>
      <button
        className="p-3 border border-gray-200 rounded-md hover:bg-blue-50"
        onClick={() => console.log(title)}
      >
        {children}
      </button>
    </div>
  );
};

const RowActions = () => {
  return (
    <>
      <RowButton title="View">
        <FiEye />
      </RowButton>
      <RowButton title="Edit">
        <FiEdit />
      </RowButton>
      <RowButton title="Delete">
        <FiTrash2 />
      </RowButton>
    </>
  );
};

export default RowActions;
