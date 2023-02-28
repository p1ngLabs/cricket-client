import Link from 'next/link';
import Image from 'next/image';
import Book from '@interfaces/Book';

const BookCard = (props: { book: Book }) => {
  const { book } = props;

  return (
    <article key={book.isbn} className="card min-w-[13rem] md:w-[18%] bg-base-100 hover:shadow-lg">
      <figure className="relative px-4 pt-4">
        <Link href={`/books/${book.id}`}>
          <Image
            src={book.thumbnail}
            width="100"
            height="150"
            className="rounded"
            alt="Book thumbnail"
          />
        </Link>
      </figure>
      <main className="flex flex-col flex-auto gap-2 p-4">
        <div className="flex-grow">
          <p className="font-semibold text-red-600">{book.price?.toLocaleString('en-US')} VND</p>
          <h3 className="font-semibold text-md my-1">
            <Link href={`/books/${book.id}`} className="hover:text-blue-500">
              {book.title}
            </Link>
          </h3>
          <p className="text-xs opacity-60">{book.publisher}</p>
        </div>
        <button className="btn w-full">Add to Cart</button>
      </main>
    </article>
  );
};

export default BookCard;
