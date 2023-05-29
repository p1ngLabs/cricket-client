interface ISaleBook {
  id: number;
  book_id: number;
  sale_price: number | null;
  start_sale: string | null;
  end_sale: string | null;
}

export default ISaleBook;
