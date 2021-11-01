import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 48px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.shades.black};

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-bottom: 16px;
    font-size: 40px;
    line-height: 48px;
  }
`;
