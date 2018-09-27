import React from 'react';

import { Container } from './styles';

import Product from '../../components/Product';

const Category = () => (
  <Container to="/categories/1">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </Container>
);

export default Category;
