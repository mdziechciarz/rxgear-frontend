// /* eslint-disable prefer-template */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{img?: string}>`
  display: flex;
  width: 212px;
  height: 96px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 20px;
  background: ${({img}) => img && `url(${img}),`}
      linear-gradient(226.31deg, rgba(25, 25, 25, 0.5) 33.96%, rgba(69, 22, 36, 0.5) 85.41%),
    ${({theme}) => theme.colors.neutral[800]};
  background-repeat: no-repeat;
  overflow-x: visible;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  animation: shake 1s;

  &::last-of-type {
    margin-right: 0;
  }

  @keyframes shake {
    10% {
      transform: translate3d(12px, 0, 0);
    }
    40% {
      transform: translate3d(0px, 0, 0);
    }
    70% {
      transform: translate3d(10px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
    }
  }

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    width: calc(212px * 0.65);
    height: calc(96px * 0.65);
    margin: 0;
    animation: none;
  }
  @media (min-width: 1160px) {
    width: calc(212px * 0.75);
    height: calc(96px * 0.75);
  }
  @media (min-width: 1280px) {
    width: calc(212px * 0.85);
    height: calc(96px * 0.85);
  }
  @media (min-width: 1480px) {
    width: 212px;
    height: 96px;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({theme}) => theme.colors.shades.white};

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
  @media (min-width: 1480px) {
    font-size: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  color: white;

  & > svg {
    width: 28px;
    height: 28px;

    @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
      width: 20px;
      height: 20px;
    }
    @media (min-width: 1280px) {
      width: 28px;
      height: 28px;
    }
  }
`;

interface ICardProps {
  img?: string;
  InternalIcon?: JSX.Element;
  title: string;
}

const Card = ({img, InternalIcon, title}: ICardProps): JSX.Element => (
  <Container img={img}>
    {InternalIcon && <IconContainer>{InternalIcon}</IconContainer>}
    <Title>{title}</Title>
  </Container>
);

export default Card;
