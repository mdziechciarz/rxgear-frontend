import React, {ReactText} from 'react';
import styled, {css} from 'styled-components';
import {Icon as IconType} from 'react-feather';

const Button = styled.button<{primary?: boolean; ghost?: boolean; iconOnly?: boolean}>`
  padding: ${({iconOnly}) => (iconOnly ? '12px' : '12px 32px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({theme, primary, ghost}) => {
    switch (true) {
      case primary:
        return css`
          background-color: ${theme.colors.primary[500]};
          color: ${theme.colors.shades.white};
        `;
      case ghost:
        return css`
          background-color: ${theme.colors.shades.white};
          color: ${theme.colors.shades.black};
        `;
      default:
        return css`
          background-color: ${theme.colors.neutral[900]};
          color: ${theme.colors.shades.white};
        `;
    }
  }}
`;

const IconWrapper = styled.i`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

interface IButtonProps {
  icon?: JSX.Element;
  children?: ReactText;
}

export default ({icon, children, ...props}: any): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...props}>
    {children}
    {icon}
  </Button>
);
