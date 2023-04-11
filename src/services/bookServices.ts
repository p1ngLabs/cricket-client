import Book from '@models/Book';

export function getBooks() {
  return Book.query();
}
