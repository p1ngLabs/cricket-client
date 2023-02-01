import { NextPage } from 'next/types';
import Image from 'next/image';
import Layout from '@layouts/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from 'public/images/banner1.png';
import banner2 from 'public/images/banner2.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="my-4 max-h-[60vh]"
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default Home;
