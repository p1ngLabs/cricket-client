import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // deletes all existing entries
  await knex('users').del();
  await knex('social_profiles').del();
  await knex('orders').del();
  await knex('authors').del();
  await knex('categories').del();
  await knex('books').del();
  await knex('sale_books').del();
  await knex('orders_books').del();

  // inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      first_name: 'phuc',
      last_name: 'nguyen',
      username: 'phuc1nguyen',
      email: 'phuc.ng13988@gmail.com',
      password: '123456',
      phone: '0918201398',
      profile_picture: '',
      role: 'admin',
      active: true,
    },
    {
      id: 2,
      first_name: 'khanh',
      last_name: 'nguyen',
      username: 'khanhnguyen',
      email: 'khan.ng13988@gmail.com',
      password: '123456',
      phone: '0941926468',
      profile_picture: '',
      role: 'customer',
      active: true,
    },
  ]);
  await knex('social_profiles').insert([
    {
      id: 1,
      user_id: 1,
      provider_type: 'discord',
      username: 'PN',
      image: 'https://cdn.discordapp.com/embed/avatars/4.png',
    },
  ]);
  await knex('orders').insert([
    {
      id: 1,
      user_id: 1,
      payment_method: 'cod',
      payment_status: 'paid',
      shipping_type: 'pick up',
      shipping_address: JSON.stringify({
        number: 25,
        street: 'Doan Thi Diem',
        district: 'Dong Da',
        city: 'Hanoi',
      }),
      quantity: 1,
      total: 230000,
      shipping_cost: 20000,
      grand_total: 250000,
      is_cart: false,
    },
  ]);
  await knex('authors').insert([
    {
      id: 1,
      name: 'Frank Herbert',
      description:
        'He was an American science fiction author best known for the 1965 novel Dune and its five sequels',
      slug: 'frank-herbert',
    },
  ]);
  await knex('categories').insert([
    { id: 1, parent_id: 0, name: 'Science Fiction', slug: 'science-fiction', active: true },
  ]);
  await knex('books').insert([
    {
      id: 1,
      category_id: 1,
      author_id: 1,
      title: 'Children of Dune',
      description:
        'Children of Dune is a 1976 science fiction novel by Frank Herbert, the third in his Dune series of six novels',
      publisher: 'Ace Books',
      published_date: 'April 1976',
      pages: 609,
      dimensions: null,
      language: 'english',
      isbn: '0-399-11697-4',
      condition: 'new',
      price: 230000,
      current_stock: 100,
      sold_copies: 10,
      thumbnail: '',
      photos: null,
      slug: 'children-of-dune',
      active: true,
    },
  ]);
  await knex('sale_books').insert([
    {
      id: 1,
      book_id: 1,
      sale_price: null,
      start_sale: null,
      end_sale: null,
    },
  ]);
  await knex('orders_books').insert([
    {
      id: 1,
      order_id: 1,
      book_id: 1,
    },
  ]);
}
