import React from 'react';

import { Container, Image, Wrapper } from './styles';

const Product = () => (
  <Wrapper>
    <Image>
      <img src="" alt="camiseta" />
    </Image>
    <Container>
      <strong />
      <p />
      <span>R$</span>
      <button type="submit">Adicionar ao carrinho</button>
    </Container>
  </Wrapper>
);

export default Product;
