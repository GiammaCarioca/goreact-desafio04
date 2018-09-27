import React from 'react';
import { Item } from './styles';

import Camiseta from '../../assets/images/camisa@2x.png';

const Product = () => (
  <Item to="/products/1">
    <img src={Camiseta} alt="camiseta trok" />
    <strong>Camiseta Trok</strong>
    <p>Element</p>
    <span>R$ 50,00</span>
  </Item>
);

export default Product;
