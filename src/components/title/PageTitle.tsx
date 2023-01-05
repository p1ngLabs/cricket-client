import { useContext } from 'react';
import DrawerContext from 'src/contexts/DrawerContext';

const PageTitle = () => {
  const { pageTitle } = useContext(DrawerContext);

  return <h1 className="font-bold text-xl text-gray-700">Danh sách {pageTitle}</h1>;
};

export default PageTitle;
