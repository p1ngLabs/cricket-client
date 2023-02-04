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
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mb-16 max-h-[60vh] max-w-full"
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner" priority />
        </SwiperSlide>
      </Swiper>

      {/* TODO: abstract book section code into another component: BookCard and SectionTitle might not exist anymore */}
      {newReleases.length > 0 && (
        <>
          <SectionTitle title="Best sellers" />
          <section className="flex justify-center">
            <div className="flex gap-4 mx-4 mb-16 pb-2 overflow-auto">
              {newReleases.map((book) => (
                <BookCard key={book.isbn} book={book} />
              ))}
            </div>
          </section>
        </>
      )}

      {allBooks.length > 0 && (
        <>
          <SectionTitle title="All books" />
          <section className="flex justify-center">
            <div className="flex lg:flex-wrap gap-4 mx-4 mb-16 pb-2 overflow-auto">
              {allBooks.map((book) => (
                <BookCard key={book.isbn} book={book} />
              ))}
            </div>
          </section>
        </>
      )}

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
