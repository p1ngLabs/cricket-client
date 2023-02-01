import { createContext, ReactNode, useState } from 'react';

export interface DrawerContextInterface {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext({} as DrawerContextInterface);

export const DrawerProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
