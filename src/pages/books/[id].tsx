import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '@layouts/Layout';
import { Breadcrumbs } from '@components/index';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Book from '@interfaces/Book';
import knex from '@database/db';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface BookDetailsProps {
  book: Partial<Book>;
}

const BookDetails: NextPage<BookDetailsProps> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { book } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-4 md:mx-0">
        <Breadcrumbs currentPage={book.title} />

        <div className="book-details my-4 flex flex-wrap">
          <div className="gallery w-full md:w-1/2">
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={20}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              // https://github.com/nolimits4web/swiper/issues/5630
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-2"
            >
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  width="80"
                  height="80"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  width="100"
                  height="100"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  width="100"
                  height="100"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  width="100"
                  height="100"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  width="50"
                  height="50"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  width="50"
                  height="50"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  width="50"
                  height="50"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  width="50"
                  height="50"
                  alt="demo"
                  priority
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="info w-full md:w-1/2 md:pl-8">
            <h2 className="font-bold capitalize text-2xl">{book.title}</h2>
            <p className="mt-1 opacity-80">by {`author id: ${book.author_id}`}</p>
            <div className="font-bold text-xl my-2">{book.price.toLocalString()} VND</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await knex<Book[]>('books').select('id');
  const paths = books.map((book) => ({
    params: { id: String(book.id) },
  }));

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await knex<Book>('books')
    .select('id', 'author_id', 'title', 'publisher', 'price', 'isbn', 'thumbnail')
    .where('id', params?.id)
    .first();

  return {
    props: {
      book,
    },
  };
};

export default BookDetails;
