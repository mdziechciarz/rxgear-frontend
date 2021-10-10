import React from 'react';
import {Icon as IconType} from 'react-feather';
import styled from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 40px;

  & > * {
    width: 40px;
    height: 40px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 56px;
    height: 56px;
    & > * {
      width: 56px;
      height: 56px;
    }
  }
`;

interface INavButtonProps {
  Icon: IconType;
  className?: string;
}

const ButtonIcon = ({Icon, className}: INavButtonProps): JSX.Element => (
  <Button className={className}>
    <Icon />
  </Button>
);

export default ButtonIcon;
