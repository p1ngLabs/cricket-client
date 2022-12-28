import knex from 'knex';
import config from '../config/config';

const myKnex = knex(config.db);

export default myKnex;
