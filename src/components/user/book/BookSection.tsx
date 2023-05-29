import Book from '@/types/schemas/book.schema';
import BookCard from './BookCard';
import { Box, Grid, Title } from '@mantine/core';

export interface BookSectionProps {
  title: string;
  books: Book[];
}

const BookSection = (props: BookSectionProps) => {
  const { title, books } = props;

  return (
    <Box component="section">
      <Title align="center" order={2} size="2rem" mb="lg">
        {title.toLocaleUpperCase()}
      </Title>
      <Grid columns={30}>
        {books.map((book) => (
          <Grid.Col key={book.isbn} span={15} sm={10} md={6}>
            <BookCard book={book} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default BookSection;
