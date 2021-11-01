import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${({theme}) => theme.breakpoints.XL}px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 0 72px;
  }
`;
