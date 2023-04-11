type BookConditionType = 'new' | 'used';

interface BookInterface {
  id: number;
  category_id: number;
  author_id: number;
  title: string;
  description: string;
  publisher: string;
  published_date: string;
  pages: number;
  dimensions: string | null;
  language: string;
  isbn: string;
  condition: BookConditionType;
  price: number;
  current_stock: number;
  sold_copies: number;
  thumbnail: string;
  photos: string | null;
  slug: string;
  active: boolean;
}

export default BookInterface;
