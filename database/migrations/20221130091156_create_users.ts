import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('username', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  await knex('users').insert({
    username: 'phuc1nguyen',
    email: 'phuc.ng13988@gmail.com',
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
