import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('users', (table) => {
      table.increments().primary({ constraintName: 'users.primary_key' });
      table.string('first_name', 50);
      table.string('last_name', 50);
      table.string('username').notNullable().index();
      table.string('email').unique().notNullable().index();
      table.string('password');
      table.string('phone');
      table.string('avatar');
      table.enu('gender', ['Female', 'Male', 'Other']);
      table.enu('role', ['admin', 'customer']).defaultTo('customer');
      table.boolean('active');
      table.timestamps(true, true);
    })
    .createTable('social_profiles', (table) => {
      table.increments().primary({ constraintName: 'social_profiles.primary_key' });
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.string('provider');
      table.string('username');
      table.string('image');
      table.timestamps(true, true);
    })
    .createTable('orders', (table) => {
      table.increments().primary({ constraintName: 'orders.primary_key' });
      table.integer('user_id').unsigned().references('users.id').onUpdate('cascade');
      table.string('payment_method');
      table.enu('payment_status', ['paid', 'unpaid']);
      table.string('shipping_type');
      table.json('shipping_address');
      table.smallint('quantity');
      table.integer('total');
      table.integer('shipping_cost');
      table.integer('grand_total');
      table.boolean('is_cart');
      table.timestamps(true, true);
    })
    .createTable('authors', (table) => {
      table.increments().primary({ constraintName: 'authors.primary_key' });
      table.string('name').unique().notNullable().index();
      table.text('description');
      table.string('slug');
      table.timestamps(true, true);
    })
    .createTable('categories', (table) => {
      table.increments().primary({ constraintName: 'categories.primary_key' });
      table.integer('parent_id').unsigned();
      table.string('name').unique().notNullable().index();
      table.string('slug');
      table.boolean('active');
      table.timestamps(true, true);
    })
    .createTable('books', (table) => {
      table.increments().primary({ constraintName: 'books.primary_key' });
      table.integer('category_id').unsigned().references('categories.id').onUpdate('cascade');
      table.integer('author_id').unsigned().references('authors.id').onUpdate('cascade');
      table.string('title').notNullable().index();
      table.text('description');
      table.string('publisher').index();
      table.string('published_date');
      table.integer('pages');
      table.string('dimensions');
      table.string('language');
      table.string('isbn', 13).index();
      table.enu('condition', ['new', 'used']).index();
      table.integer('price').index();
      table.smallint('current_stock');
      table.integer('sold_copies');
      table.string('thumbnail').notNullable();
      table.string('photos');
      table.string('slug');
      table.boolean('active');
      table.timestamps(true, true);
    })
    .createTable('sale_books', (table) => {
      table.increments().primary({ constraintName: 'sale_books.primary_key' });
      table
        .integer('book_id')
        .unsigned()
        .references('books.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.integer('sale_price').index();
      table.datetime('start_sale');
      table.datetime('end_sale');
      table.timestamps(true, true);
    })
    .createTable('orders_books', (table) => {
      table.integer('order_id').unsigned().references('orders.id').onUpdate('cascade');
      table.integer('book_id').unsigned().references('books.id').onUpdate('cascade');
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('social_profiles', (table) => {
    table.dropForeign('user_id');
  });
  await knex.schema.table('orders', (table) => {
    table.dropForeign('user_id');
  });
  await knex.schema.table('books', (table) => {
    table.dropForeign('category_id');
    table.dropForeign('author_id');
  });
  await knex.schema.table('sale_books', (table) => {
    table.dropForeign('book_id');
  });
  await knex.schema.table('orders_books', (table) => {
    table.dropForeign('order_id');
    table.dropForeign('book_id');
  });
  await knex.schema
    .dropTable('users')
    .dropTable('social_profiles')
    .dropTable('orders')
    .dropTable('authors')
    .dropTable('categories')
    .dropTable('sale_books')
    .dropTable('books')
    .dropTable('orders_books');
}
