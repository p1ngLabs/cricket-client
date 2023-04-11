import OrdersInterface from '@interfaces/Order';

const orders: OrdersInterface[] = [
  {
    id: 1,
    user_id: 1,
    payment_method: 'cash',
    payment_status: 'paid',
    shipping_type: 'pick up',
    shipping_address: JSON.stringify({
      number: 25,
      street: 'Doan Thi Diem',
      district: 'Dong Da',
      city: 'Hanoi',
    }),
    quantity: 1,
    total: 230000,
    shipping_cost: 20000,
    grand_total: 250000,
    is_cart: false,
  },
];

export default orders;
