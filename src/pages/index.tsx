import { InferGetStaticPropsType, NextPage } from 'next/types';
import Image from 'next/image';
import Layout from '@layouts/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from 'public/images/banner1.png';
import banner2 from 'public/images/banner2.png';
import { BookSection } from '@components/index';
import Book from '@interfaces/Book';
import knex from '@database/db';

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
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mb-24"
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner" priority />
        </SwiperSlide>
      </Swiper>

      {newReleases.length > 0 && <BookSection title="Best sellers" books={newReleases} />}

      {allBooks.length > 0 && <BookSection title="All books" books={allBooks} />}

      {/* TODO: add 'OUR ACTIVITY' section to display instagram posts and another section 'OUR BLOG' to showcase the blog (extended feature) */}
    </Layout>
  );
};

export async function getStaticProps() {
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
}

export default Home;
