/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import smartphoneImg from 'assets/images/smartphone.png';
import laptopImg from 'assets/images/laptop.png';
import headphonesImg from 'assets/images/headphones.png';
import pcComponentsImg from 'assets/images/pc_components.png';
import tvImg from 'assets/images/tv.png';
import {Menu} from 'react-feather';

import Card from './Card';

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavCategories = (): JSX.Element => (
  <Container>
    <Card title="Categories" InternalIcon={<Menu />} />
    <Card title="Smartphones" img={smartphoneImg} />
    <Card title="Laptops" img={laptopImg} />
    <Card title="Headphones" img={headphonesImg} />
    <Card title="PC Components" img={pcComponentsImg} />
    <Card title="TV" img={tvImg} />
  </Container>
);

export default NavCategories;
