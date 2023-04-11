import BaseModel from './BaseModel';
import Category from './Category';
import Order from './Order';
import SaleBook from './SaleBook';

class Book extends BaseModel {
  static get tableName() {
    return 'books';
  }

  static get relationMappings() {
    return {
      category: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'books.category_id',
          to: 'categories.id',
        },
      },
      orders: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'books.id',
          through: {
            from: 'orders_books.book_id',
            to: 'orders_books.order_id',
          },
          to: 'orders.id',
        },
      },
      author: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Book,
        join: {
          from: 'books.author_id',
          to: 'authors.id',
        },
      },
      sale_books: {
        relation: BaseModel.HasManyRelation,
        modelClass: SaleBook,
        join: {
          from: 'books.id',
          to: 'sale_books.book_id',
        },
      },
    };
  }
}

export default Book;
