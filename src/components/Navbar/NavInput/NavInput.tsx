import React from 'react';
import styled from 'styled-components';
import {Search} from 'react-feather';

const Container = styled.div`
  height: 48px;
  width: 100%;
  margin-top: 24px;
  display: flex;
  position: relative;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    height: 56px;
    margin-top: 32px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    margin-top: 0;
    /* 5 of 12 col */
    width: calc(5 / 12 * 100%);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 68px 0 20px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({theme}) => theme.colors.neutral[100]};
  color: ${({theme}) => theme.colors.neutral[700]};

  &::placeholder {
    color: ${({theme}) => theme.colors.neutral[300]};
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.neutral[900]};
  color: ${({theme}) => theme.colors.shades.white};
  cursor: pointer;

  & > * {
    width: 24px;
    height: 24px;
    transform: scaleX(-1);
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 72px;
    height: 56px;

    & > * {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavInput = (): JSX.Element => (
  <Container>
    <Input placeholder="What are you looking for?" />
    <Button>
      <Search />
    </Button>
  </Container>
);

export default NavInput;
