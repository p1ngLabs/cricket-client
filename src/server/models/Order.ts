import BaseModel from './BaseModel';
import User from './User';
import Book from './Book';

class Order extends BaseModel {
  static get tableName() {
    return 'orders';
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.user_id',
          to: 'users.id',
        },
      },
      books: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Book,
        join: {
          from: 'orders.id',
          through: {
            from: 'orders_books.order_id',
            to: 'orders_books.book_id',
          },
          to: 'books.id',
        },
      },
    };
  }
}

export default Order;
