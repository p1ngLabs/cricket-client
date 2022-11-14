import { ReactNode, createContext, RefObject, useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

type DrawerSizesType = 'lg' | 'full';

type DrawerContextType = {
  handleOpen: (arg: DrawerSizesType) => void;
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement>;
  size: DrawerSizesType;
};

const DrawerContext = createContext({} as DrawerContextType);

export const DrawerProvider = (props: { children?: ReactNode }) => {
  const { children } = props;

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
