import { Model } from 'objection';
import knexInstance from '@database/db';

class BaseModel extends Model {
  static get modelPaths() {
    // returns a list of paths from which to search for models for relations
    return [__dirname];
  }

  static knex() {
    return knexInstance;
  }
}

export default BaseModel;
