import type { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import Layout from '@/components/user/layout/Layout';
import BookSection from '@/components/user/book/BookSection';
import type IBook from '@/types/schemas/book.schema';
import config from '@/config';

import 'swiper/css';
import 'swiper/css/autoplay';

const Home = ({ books }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Layout>{books.length > 0 && <BookSection title="All books" books={books} />}</Layout>;
};

export const getStaticProps: GetStaticProps<{ books: IBook[] }> = async () => {
  const res = await fetch(`${config.app.serverUrl}/v1/books`);
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
};

export default Home;
