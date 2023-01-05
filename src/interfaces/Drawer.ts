import { RefObject } from 'react';

export type DrawerSizesType = 'lg' | 'full';

interface DrawerContextInterface {
  pageTitle: string | undefined;
  handleOpen: (arg: DrawerSizesType) => void;
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement>;
  size: DrawerSizesType;
}

export default DrawerContextInterface;
