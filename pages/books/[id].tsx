import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '@/components/user/Layout';
import { Breadcrumbs } from '@/components';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import IBook from '@/types/schemas/book.schema';
import QuantityCounter from '@/components/shared/QuantityCounter';
import config from '@/config';
import { Badge, Box, Flex, Title, Text, createStyles, Button, Divider, List } from '@mantine/core';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const useStyles = createStyles((theme) => ({
  gallery: {
    width: '50%',
    height: 'fit-content',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  info: {
    width: '50%',
    paddingLeft: '2rem',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      paddingLeft: 0,
      marginTop: '2rem',
    },
  },
  swiper: {
    height: '80%',
    width: '100%',
    marginBottom: '.5rem',
  },
}));

const BookDetails = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { classes } = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <Box mt={60}>
        <Breadcrumbs currentPage={book.title} />

        <Flex justify="space-between" wrap="wrap">
          <Box component="section" className={classes.gallery}>
            <Swiper
              className={classes.swiper}
              style={{
                '--swiper-navigation-color': '#ccc',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={20}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              // https://github.com/nolimits4web/swiper/issues/5630
              modules={[FreeMode, Navigation, Thumbs]}
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
          </Box>

          <Box component="section" className={classes.info}>
            <Flex align="center">
              <Title order={2}>{book.title}</Title>
              {!book.current_stock && (
                <Badge
                  variant="gradient"
                  gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                  ml=".5rem"
                >
                  Out of stock
                </Badge>
              )}
            </Flex>

            <Text color="dimmed" opacity={0.8}>
              by {book.author}
            </Text>

            <Text fw="bold" fz="xl" my="md">
              {book.price.toLocaleString()}
              <sup>VND</sup>
            </Text>

            <Flex align="center" gap="md">
              <QuantityCounter />

              <Button variant="light" color="violet" size="lg">
                Add to cart
              </Button>
            </Flex>

            <Divider my="md" />

            <Box mt="md">
              <Title order={3} fw="bold" fz="lg">
                Description
              </Title>
              <Text component="p" align="justify">
                {book.description}
              </Text>
              <List>
                <List.Item>
                  <Text span fw="bold" opacity={0.6}>
                    Language:
                  </Text>{' '}
                  {book.language}
                </List.Item>
                <List.Item>
                  <Text span fw="bold" opacity={0.6}>
                    Pages:
                  </Text>{' '}
                  {book.pages}
                </List.Item>
                <List.Item>
                  <Text span fw="bold" opacity={0.6}>
                    Dimensions:
                  </Text>{' '}
                  {book.dimensions}
                </List.Item>
              </List>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${config.app.serverUrl}/v1/books`);
  const books: IBook[] = await res.json();

  const paths = books.map((book) => ({
    params: { id: String(book.id) },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${config.app.serverUrl}/v1/books/${params?.id}`);
  const book: IBook = await res.json();

  return {
    props: {
      book,
    },
  };
};

export default BookDetails;
