import styled from 'styled-components';

import chevronLeft from 'assets/icons/chevron-left.svg';
import chevronRight from 'assets/icons/chevron-right.svg';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${({theme}) => theme.breakpoints.XL}px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 0 72px;
  }

  & .swiper-container {
    border-radius: 20px;
  }
  & .swiper-pagination-bullet-active {
    background-color: ${({theme}) => theme.colors.primary[500]};
  }
  & .swiper-button-prev {
    width: 48px;
    height: 48px;
    background-image: url(${chevronLeft});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(99deg) brightness(109%) contrast(100%);
  }
  & .swiper-button-prev::after {
    display: none;
  }
  & .swiper-button-next {
    width: 48px;
    height: 48px;
    background-image: url(${chevronRight});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(99deg) brightness(109%) contrast(100%);
  }

  & .swiper-button-next::after {
    display: none;
  }
`;

export const Image = styled.div<{src: string}>`
  width: 100%;
  height: 208px;
  background-image: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    height: 416px;
  }
`;
