import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {useMediaQuery} from 'react-responsive';

import DefaultWrapper from 'components/DefaultWrapper/DefaultWrapper';
import ProductCard from 'components/ProductCard/ProductCard';
import {Container, Title} from './styles';

SwiperCore.use([Navigation]);

const ProductList = ({title}: {title: string}): JSX.Element => {
  const isTablet = useMediaQuery({minWidth: 768});
  const isMedium = useMediaQuery({minWidth: 1024});
  const isLarge = useMediaQuery({minWidth: 1400});

  const slidesPerView = () => {
    if (isLarge) return 4;
    if (isMedium) return 3;
    if (isTablet) return 2;
    return 1;
  };
  return (
    <DefaultWrapper>
      <Container>
        <Title>{title}</Title>
        <Swiper slidesPerView={slidesPerView()} spaceBetween={24}>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard fullWidth />
          </SwiperSlide>
        </Swiper>
      </Container>
    </DefaultWrapper>
  );
};

export default ProductList;
