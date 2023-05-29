interface IOrder {
  id: number;
  user_id: number;
  payment_method: 'cash' | 'cards' | 'online transfer';
  payment_status: 'paid' | 'unpaid';
  shipping_type: 'pick up' | 'ship';
  shipping_address: string;
  quantity: number;
  total: number;
  shipping_cost: number;
  grand_total: number;
  is_cart: boolean;
}

export default IOrder;
