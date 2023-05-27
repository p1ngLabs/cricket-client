import Link from 'next/link';
import Image from 'next/image';
import Book from '@/types/schemas/book.schema';
import { AspectRatio, Button, Card, Stack, Text, Tooltip, createStyles } from '@mantine/core';

interface BookCardProps {
  book: Book;
}

const useStyles = createStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const BookCard = ({ book }: BookCardProps) => {
  const { classes } = useStyles();

  return (
    <Card
      component="article"
      shadow="md"
      padding="md"
      radius="md"
      h="100%"
      withBorder
      className={classes.card}
    >
      <Card.Section p="md">
        <Link href={`/books/${book.id}`}>
          <AspectRatio ratio={5 / 6}>
            <Image
              src={book.thumbnail}
              width={100}
              height={120}
              alt="Book Thumb"
              style={{ objectFit: 'contain' }}
            />
          </AspectRatio>
        </Link>
      </Card.Section>

      <Stack spacing="2xs">
        <Text component="p" weight="bold" color="red" my={0}>
          {book.price.toLocaleString('en-US')} VND
        </Text>
        <Link href={`/books/${book.id}`}>
          <Text size="md" weight={500} lineClamp={2}>
            {book.title}
          </Text>
        </Link>
        <Text color="dimmed" size="xs" mb={8}>
          {/* TODO: Change to author name */}
          {book.publisher}
        </Text>
      </Stack>

      <Button variant="light" color="violet" fullWidth px={0} mt="auto" radius="md">
        Add to Cart
      </Button>
    </Card>
  );
};

export default BookCard;
