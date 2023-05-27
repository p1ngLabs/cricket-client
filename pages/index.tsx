import type { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import Layout from '@/components/user/Layout';
import 'swiper/css';
import 'swiper/css/autoplay';
import { BookSection } from '@/components';
import type Book from '@/types/schemas/book.schema';
import config from '@/config';

// https://stackoverflow.com/questions/70986963/property-does-not-exist-on-type-even-though-type-is-declared-when-typing-nextpag
interface HomePageProps {
  books: Book[];
}

// https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
const Home: InferGetStaticPropsType<typeof getStaticProps> = ({ books }: HomePageProps) => {
  return <Layout>{books.length > 0 && <BookSection title="All books" books={books} />}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${config.app.serverUrl}/v1/books`);
  const books: Book[] = await res.json();

  return {
    props: {
      books,
    },
  };
};

export default Home;
