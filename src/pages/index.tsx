import { InferGetStaticPropsType, NextPage } from 'next/types';
import Image from 'next/image';
import Layout from '@layouts/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from 'public/images/banner1.png';
import banner2 from 'public/images/banner2.png';
import { BookCard, SectionTitle } from '@components/index';
import Book from '@interfaces/Book';
import knex from 'database/db';

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
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mb-8 max-h-[60vh]"
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner" priority />
        </SwiperSlide>
      </Swiper>

      {/* TODO: abstract book section code into another component: BookCard and SectionTitle might not exist anymore */}
      <section>
        <SectionTitle title="New Release" />
        <div className="items-list flex md:flex-wrap gap-4 mx-4 mb-16 pb-1 overflow-y-auto lg:overflow-hidden">
          {newReleases.map((book) => (
            <BookCard key={book.isbn} book={book} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="All products" />
        <div className="items-list flex md:flex-wrap gap-4 mx-4 mb-16 pb-1 overflow-y-auto lg:overflow-hidden">
          {allBooks.map((book) => (
            <BookCard key={book.isbn} book={book} />
          ))}
        </div>
      </section>

      {/* TODO: add 'OUR ACTIVITY' section which display instagram post (extended feature) */}
    </Layout>
  );
};

export async function getStaticProps() {
  const newReleases = await knex<Book[]>('books')
    .select('title', 'publisher', 'price', 'isbn', 'thumbnail')
    .limit(5);
  const allBooks = await knex<Book[]>('books')
    .select('title', 'publisher', 'price', 'isbn', 'thumbnail')
    .offset(5)
    .limit(10);

  return {
    props: { newReleases, allBooks },
  };
}

export default Home;
