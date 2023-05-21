import type { NextPage } from 'next/types';
import Layout from '@/components/user/Layout';
import 'swiper/css';
import 'swiper/css/autoplay';
import { BookSection } from '@/components';
import type Book from '@/types/schemas/book.schema';
import { useEffect, useState } from 'react';

// https://stackoverflow.com/questions/70986963/property-does-not-exist-on-type-even-though-type-is-declared-when-typing-nextpag

// https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
const Home: NextPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/v1/books');
      const books = await response.json();
      setBooks(books);
    })();
  }, []);

  return <Layout>{books.length > 0 && <BookSection title="All books" books={books} />}</Layout>;
};

export default Home;
