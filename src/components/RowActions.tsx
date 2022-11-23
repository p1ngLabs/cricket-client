import { ReactNode } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const RowButton = (props: { children?: ReactNode; title: 'View' | 'Edit' | 'Delete' }) => {
  const { children, title } = props;

  return (
    <Tooltip hasArrow label={title} placement="top">
      <button
        className="p-3 border border-gray-200 rounded-md hover:bg-blue-50"
        onClick={() => console.log(title)}
      >
        {children}
      </button>
    </Tooltip>
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
