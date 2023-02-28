import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '@layouts/Layout';
import { Breadcrumbs } from '@components/index';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Book from '@interfaces/Book';
import knex from '@database/db';
import { BiMinus, BiPlus } from 'react-icons/bi';

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
  const [quantity, setQuantity] = useState<number>(1);

  const handleMinus = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Layout>
      <div className="mx-4 md:mx-0">
        <Breadcrumbs currentPage={book.title} />
        <div className="book-details my-4 flex flex-wrap">
          <div className="gallery w-full mb-4 md:w-1/2">
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

          <div className="info w-full mb-4 md:w-1/2 md:pl-8">
            <h2 className="font-bold capitalize text-2xl flex items-center">
              {book.title}{' '}
              {!book.current_stock && (
                <span className="badge badge-error text-white ml-2">Out of stock</span>
              )}
            </h2>
            <p className="opacity-80">by {`author id: ${book.author_id}`}</p>

            <div className="font-bold text-3xl my-4">
              {book.price.toLocaleString()}
              <sup>đ</sup>
            </div>

            <div className="flex items-center gap-4">
              <div className="btn-group border rounded-xl">
                <button className="btn btn-ghost text-xl" onClick={handleMinus}>
                  <BiMinus />
                </button>
                <input
                  type="text"
                  className="w-12 md:w-16 text-center font-bold text-xl focus:outline-none"
                  inputMode="numeric"
                  value={quantity}
                  maxLength={3}
                  step={1}
                  disabled
                />
                <button className="btn btn-ghost text-xl" onClick={handlePlus}>
                  <BiPlus />
                </button>
              </div>
              <button type="button" className="btn btn-secondary w-full flex-shrink">
                Add to cart
              </button>
            </div>

            <div className="divider"></div>

            <div className="mt-4">
              <h3 className="font-bold text-xl">Description</h3>
              <p className="text-justify">{book.description}</p>
              <ul className="pt-4">
                <li>
                  <span className="font-bold opacity-60">Language:</span> {book.language}
                </li>
                <li>
                  <span className="font-bold opacity-60">Pages:</span> {book.pages}
                </li>
                <li>
                  <span className="font-bold opacity-60">Dimension:</span> {book.dimensions}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* TODO: additional section for recommended books */}
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
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await knex<Book>('books')
    .select(
      'id',
      'author_id',
      'title',
      'description',
      'publisher',
      'price',
      'current_stock',
      'pages',
      'dimensions',
      'language',
      'isbn',
      'thumbnail'
    )
    .where('id', params?.id)
    .first();

  return {
    props: {
      book,
    },
  };
};

export default BookDetails;
