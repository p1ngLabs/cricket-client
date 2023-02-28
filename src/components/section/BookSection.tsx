import Book from '@interfaces/Book';
import { BookCard } from '..';

export interface SectionInterface {
  title: string;
  books: Book[];
}

const BookSection = (props: SectionInterface) => {
  const { title, books } = props;

  return (
    <>
      <h2 className="relative text-center font-bold uppercase text-3xl before:absolute before:border-t-2 before:w-16 before:translate-y-4 before:-translate-x-full before:border-gray-400 after:absolute after:border-t-2 after:w-16 after:translate-y-4 after:border-gray-400 mx-4 mb-8 md:mx-0">
        <span className="px-4 bg-white">{title}</span>
      </h2>
      <section
        className={`flex ${
          books.length > 4 && 'lg:flex-wrap'
        } lg:justify-center gap-6 mb-24 pb-2 mx-2 md:mx-0 overflow-auto`}
      >
        {books.map((book) => (
          <BookCard key={book.isbn} book={book} />
        ))}
      </section>
    </>
  );
};

export default BookSection;
