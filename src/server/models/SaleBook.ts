import BaseModel from './BaseModel';
import Book from './Book';

class SaleBook extends BaseModel {
  static get tableName() {
    return 'sale_books';
  }

  static get relationMappings() {
    return {
      book: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Book,
        join: {
          from: 'sale_books.book_id',
          to: 'books.id',
        },
      },
    };
  }
}

export default SaleBook;
