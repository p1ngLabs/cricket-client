import BaseModel from './BaseModel';
import Order from './Order';

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'username', 'email', 'password'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      orders: {
        relation: BaseModel.HasManyRelation,
        modelClass: Order,
        join: {
          from: 'users.id',
          to: 'orders.user_id',
        },
      },
    };
  }
}

export default User;
