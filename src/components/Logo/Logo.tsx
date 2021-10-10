import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto 0 0;
`;

const Typography = styled(Link)`
  font-family: Vampiro One;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  font-family: 'Vampiro One', cursive;
  text-decoration: none;
  color: ${({theme}) => theme.colors.primary[500]};

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    line-height: 64px;
    font-size: 60px;
  }
`;
const Span = styled.span`
  color: #000;
`;

const Logo = (): JSX.Element => (
  <Container>
    <Typography to="/">
      RX<Span>Gear</Span>
    </Typography>
  </Container>
);

export default Logo;
