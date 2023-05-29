import { useState } from 'react';
import { Button, Text, createStyles } from '@mantine/core';
import { BiMinus, BiPlus } from 'react-icons/bi';

const useStyles = createStyles(() => ({
  minusBtn: {
    borderRight: 'none',
  },
  quantity: {
    borderBlock: 'solid 1px #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtn: {
    borderLeft: 'none',
  },
}));

const QuantityCounter = () => {
  const { classes } = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Button.Group>
      <Button
        variant="default"
        fz="lg"
        size="lg"
        onClick={handleMinus}
        className={classes.minusBtn}
      >
        <BiMinus />
      </Button>
      <Text
        component="p"
        align="center"
        w={50}
        my={0}
        fz="xl"
        fw="bold"
        className={classes.quantity}
      >
        {quantity}
      </Text>
      <Button variant="default" fz="lg" size="lg" onClick={handlePlus} className={classes.plusBtn}>
        <BiPlus />
      </Button>
    </Button.Group>
  );
};

export default QuantityCounter;
