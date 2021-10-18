import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import mainTheme from 'theme/mainTheme';

import {Wrapper, Image} from './styles';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const AdBanner = (): JSX.Element => {
  const isDesktop = useMediaQuery({
    minWidth: mainTheme.breakpoints.L,
  });

  return (
    <Wrapper>
      <Swiper
        autoplay={{delay: 4000, disableOnInteraction: true}}
        navigation={isDesktop}
        pagination={{dynamicBullets: true}}
      >
        <SwiperSlide>
          <Image src="https://www.uxconnections.com/wp-content/uploads/s9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://img.global.news.samsung.com/global/wp-content/uploads/2017/09/Galaxy-Note8-Global-Launch_main_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://www.uxconnections.com/wp-content/uploads/s9.jpg" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default AdBanner;
