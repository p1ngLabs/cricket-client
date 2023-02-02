import { ReactNode, useContext } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import DrawerContext from 'src/contexts/DrawerContext';

const CoreDrawer = (props: { children: ReactNode }) => {
  const { children } = props;
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext);

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer}
      direction="right"
      size="500px"
      duration={250}
    >
      {children}
    </Drawer>
  );
};

export default CoreDrawer;
