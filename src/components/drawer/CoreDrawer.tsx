import { ReactNode, useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import DrawerContext from 'src/contexts/DrawerContext';

const CoreDrawer = (props: { children?: ReactNode }) => {
  const { children } = props;
  const { pageTitle, isOpen, onClose, btnRef, size } = useContext(DrawerContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Thêm {pageTitle?.toLowerCase()}</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

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
