import React from 'react';
import {ShoppingCart, Heart} from 'react-feather';
import {
  Container,
  Image,
  PanelTop,
  RatingPlaceholder,
  PanelBottom,
  Table,
  Name,
  Price,
  StyledButton,
} from 'components/ProductCard/styles';

const Details = ({details}: {details: {[key: string]: string}}) => (
  <Table>
    <tbody>
      {Object.entries(details)
        .slice(0, 4)
        .map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
    </tbody>
  </Table>
);

interface IProductCardProps {
  fullWidth?: boolean;
}

const ProductCard = ({fullWidth}: IProductCardProps): JSX.Element => (
  <Container fullWidth={fullWidth}>
    <Image />
    <PanelTop>
      <Name>Apple iPhone 12 128GB Purple 5G Midnight Blue</Name>
      <RatingPlaceholder />
      <Details details={{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}} />
    </PanelTop>
    <PanelBottom>
      <Price>4299,99zł</Price>
      <StyledButton icon={<Heart />} ghost iconOnly />
      <StyledButton icon={<ShoppingCart />} />
    </PanelBottom>
  </Container>
);

export default ProductCard;
