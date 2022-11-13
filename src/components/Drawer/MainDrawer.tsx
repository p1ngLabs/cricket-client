import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from '@chakra-ui/react';

type propsType = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
  size: string;
};

const MainDrawer = (props: propsType) => {
  const { children, isOpen, onClose, btnRef, size } = props;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Thêm khách hàng</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
          {children}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Create</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MainDrawer;
