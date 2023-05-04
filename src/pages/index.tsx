import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next/types';
import Layout from '@/client/components/user/Layout';
import 'swiper/css';
import 'swiper/css/autoplay';
import { BookSection } from 'src/client/components/index';
import type Book from '@/types/schemas/book.schema';
import knex from '../../database/index';

// https://stackoverflow.com/questions/70986963/property-does-not-exist-on-type-even-though-type-is-declared-when-typing-nextpag
interface HomeProps {
  newReleases: Partial<Book>[];
  allBooks: Partial<Book>[];
}

// https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
const Home: NextPage<HomeProps> = ({
  newReleases,
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      {newReleases.length > 0 && <BookSection title="Best sellers" books={newReleases} />}

      {allBooks.length > 0 && <BookSection title="All books" books={allBooks} />}

      {/* TODO: add 'OUR ACTIVITY' section to display instagram posts and another section 'OUR BLOG' to showcase the blog (extended feature) */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const newReleases = await knex<Book[]>('books')
    .select('id', 'title', 'publisher', 'price', 'isbn', 'thumbnail')
    .limit(5);
  const allBooks = await knex<Book[]>('books')
    .select('id', 'title', 'publisher', 'price', 'isbn', 'thumbnail')
    .offset(5)
    .limit(10);

  return {
    props: { newReleases, allBooks },
  };
};

export default Home;
