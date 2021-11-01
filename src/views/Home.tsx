import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import AdBanner from 'components/AdBanner/AdBanner';
import ProductList from 'components/ProductList/ProductList';

const Home = (): JSX.Element => (
  <>
    <Navbar />
    <AdBanner />
    <ProductList title="Bestsellers" />
    <ProductList title="On sale" />
  </>
);

export default Home;
