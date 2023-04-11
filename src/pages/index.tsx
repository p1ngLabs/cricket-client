import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next/types';
import Layout from '@components/shared/layouts/Layout';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner from 'public/images/banner.jpg';
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
    <Layout isHomepage>
      <div
        className="hero min-h-[80vh] mb-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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
