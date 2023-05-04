import BaseModel from './BaseModel';
import Book from './Book';

class Author extends BaseModel {
  static get tableName() {
    return 'authors';
  }

  static get relationMappings() {
    return {
      books: {
        relation: BaseModel.HasManyRelation,
        modelClass: Book,
        join: {
          from: 'authors.id',
          to: 'books.author_id',
        },
      },
    };
  }
}

export default Author;
