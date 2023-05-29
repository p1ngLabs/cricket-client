import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode, createContext } from 'react';

export interface IDrawerContext {
  opened: boolean;
  open: () => void;
  close: () => void;
}

interface DrawerProviderProps {
  children: ReactNode;
}

const DrawerContext = createContext({} as IDrawerContext);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <DrawerContext.Provider value={{ opened, open, close }}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContext;
