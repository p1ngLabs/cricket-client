import knex from 'knex';
import config from '../config/config';
import { Model } from 'objection';

const knexInstance = knex(config.db);

Model.knex(knexInstance);

export default knexInstance;
