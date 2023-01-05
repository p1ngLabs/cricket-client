import { useRouter } from 'next/router';
import { ReactNode, createContext, useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import DrawerContextInterface, { DrawerSizesType } from '@interfaces/Drawer';
import sidebarContents from '@interfaces/SidebarAdmin';

const DrawerContext = createContext({} as DrawerContextInterface);

export const DrawerProvider = (props: { children?: ReactNode }) => {
  const { children } = props;

  const router = useRouter();
  const pageTitle = sidebarContents.find((item) => item.link === router.pathname)?.title;
  const [size, setSize] = useState<DrawerSizesType>('lg');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleOpen = (size: DrawerSizesType) => {
    setSize(size);
    onOpen();
  };

  return (
    <DrawerContext.Provider
      value={{
        pageTitle,
        handleOpen,
        isOpen,
        onClose,
        btnRef,
        size,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
