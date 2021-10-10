import React from 'react';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import mainTheme from 'theme/mainTheme';

import Logo from 'components/Logo/Logo';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import NavInput from 'components/Navbar/NavInput/NavInput';
import NavCategories from 'components/Navbar/NavCategories/NavCategories';

import {Menu, Heart, ShoppingCart} from 'react-feather';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  max-width: ${({theme}) => theme.breakpoints.XL}px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 32px 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 40px 72px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
`;

const NavButton = styled(ButtonIcon)`
  margin-left: 24px;
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-left: 56px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    margin-left: 64px;
  }
`;

const MenuButton = () => <NavButton Icon={Menu} />;
const FavoritesButton = () => <NavButton Icon={Heart} />;
const CheckoutButton = () => <NavButton Icon={ShoppingCart} />;

const Navbar = (): JSX.Element => {
  const isMobile: boolean = useMediaQuery({
    maxWidth: mainTheme.breakpoints.M - 1,
  });
  const isDesktop: boolean = useMediaQuery({
    minWidth: mainTheme.breakpoints.L,
  });

  return (
    <Wrapper>
      <Header>
        <Logo />
        {isDesktop && <NavInput />}
        {!isMobile && <FavoritesButton />}
        <CheckoutButton />
        {isMobile && <MenuButton />}
      </Header>
      {!isDesktop && <NavInput />}
      {!isMobile && <NavCategories />}
    </Wrapper>
  );
};

export default Navbar;
