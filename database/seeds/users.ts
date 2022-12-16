import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, username: 'phuc1nguyen', email: 'phuc.ng13988@gmail.com' },
    { id: 2, username: 'martinfowler', email: 'fowler@gmail.com' },
    { id: 3, username: 'johncarmack', email: 'carmack@gmail.com' },
  ]);
}
