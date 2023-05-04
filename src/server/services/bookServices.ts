import Book from '@/server/models/Book';

export function getBooks() {
  return Book.query();
}
