import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('username', 255);
    table.string('email', 255);
    table.timestamps();
  });

  await knex('users').insert({
    username: 'phuc1nguyen',
    email: 'phuc.ng13988@gmail.com',
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
