import React from 'react';
import { Product, Image, Wrapper } from './styles';

import Camiseta from '../../assets/images/camisa@2x.png';

const Produto = () => (
  <Product to="/products/1">
    <Image>
      <img src={Camiseta} alt="camiseta trok" />
    </Image>
    <Wrapper>
      <strong>Camiseta Trok</strong>
      <p>Element</p>
      <span>R$ 50,00</span>
      <button type="submit">Adicionar ao carrinho</button>
    </Wrapper>
  </Product>
);

export default Produto;
