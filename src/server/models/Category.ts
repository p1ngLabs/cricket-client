import BaseModel from './BaseModel';
import Book from './Book';

class Category extends BaseModel {
  static get tableName() {
    return 'categories';
  }

  static get relationMappings() {
    return {
      books: {
        relation: BaseModel.HasManyRelation,
        modelClass: Book,
        join: {
          from: 'categories.id',
          to: 'book.category_id',
        },
      },
    };
  }
}

export default Category;
