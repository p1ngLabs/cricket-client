import { ReactNode, useContext } from 'react';
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
import DrawerContext from '../../contexts/DrawerContext';

const CoreDrawer = (props: { children?: ReactNode }) => {
  const { children } = props;
  const { isOpen, onClose, btnRef, size } = useContext(DrawerContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {/* TODO: make dynamic drawer header */}
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

export default CoreDrawer;
