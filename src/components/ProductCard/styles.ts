import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Container = styled.div<{fullWidth?: boolean}>`
  width: ${({fullWidth}) => (fullWidth ? '100%' : '364px')};
  padding-bottom: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 3.58127px 10px rgba(0, 0, 0, 0.25);
  background-color: ${({theme}) => theme.colors.shades.white};
  cursor: pointer;
  margin: 10px;
`;

export const Image = styled.div`
  width: 100%;
  /* 4:3 ratio */
  padding-top: 75%;
  background-color: #ddd;
  background-image: url('https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2019/9/pr_2019_9_11_9_8_14_748_00.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PanelTop = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 20px 12px 0;
  position: absolute;
  /* 100% - Top and bottom paddings - PanelBottom height - spacing between panels - PanelTop height */
  top: calc(100% - 2 * 20px - 44px - 8px - 48px);
  left: 0;
  background-color: ${({theme}) => theme.colors.shades.white};
  transition: 0.3s;
  z-index: 1;

  div:hover > & {
    transform: translateY(calc(-100% + 48px + 20px));
  }
`;

export const PanelBottom = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 12px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shades.white};
  z-index: 2;
`;

export const Name = styled.h5`
  height: 48px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export const Price = styled.p`
  margin-right: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const RatingPlaceholder = styled.div`
  height: 16px;
  width: 96px;
  margin-top: 8px;
  background-color: yellow;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 8px;
  padding: 0 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;

  & tr:not(:last-of-type) {
    margin-bottom: 2px;
  }
  & td {
    width: 50%;
  }
  & td:first-of-type {
    color: ${({theme}) => theme.colors.neutral[600]};
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 8px;
`;
