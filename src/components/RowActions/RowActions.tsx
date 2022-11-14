import { Tooltip } from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

type propsType = {
  children?: JSX.Element;
  title: string;
};

const RowButton = (props: propsType) => {
  const { children, title } = props;

  return (
    <Tooltip hasArrow label={title} placement="top">
      <button className="p-3 border border-gray-200 rounded-md hover:bg-blue-50">{children}</button>
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
