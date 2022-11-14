import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

type propsType = {
  children?: JSX.Element;
};

const RowButton = (props: propsType) => {
  const { children } = props;

  return (
    <button className="p-3 border border-gray-200 rounded-md hover:bg-blue-50">{children}</button>
  );
};

const RowActions = () => {
  return (
    <>
      <RowButton>
        <FiEye />
      </RowButton>
      <RowButton>
        <FiEdit />
      </RowButton>
      <RowButton>
        <FiTrash2 />
      </RowButton>
    </>
  );
};

export default RowActions;
