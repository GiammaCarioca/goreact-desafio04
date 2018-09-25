import React from 'react';
import { Container, Wrapper, Product } from './styles';

import Camiseta from '../../assets/images/camisa@2x.png';
import Moletom from '../../assets/images/moletom@2x.png';

const Content = () => (
  <Container>
    <Wrapper>
      <Product to="/products/1">
        <img src={Camiseta} alt="camiseta trok" />
        <strong>Camiseta Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Moletom} alt="moletom trok" />
        <strong>Moletom Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Camiseta} alt="camiseta trok" />
        <strong>Camiseta Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Moletom} alt="moletom trok" />
        <strong>Moletom Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Camiseta} alt="camiseta trok" />
        <strong>Camiseta Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Moletom} alt="moletom trok" />
        <strong>Moletom Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Camiseta} alt="camiseta trok" />
        <strong>Camiseta Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
      <Product to="/products/1">
        <img src={Moletom} alt="moletom trok" />
        <strong>Moletom Trok</strong>
        <p>Element</p>
        <span>R$ 50,00</span>
      </Product>
    </Wrapper>
  </Container>
);

export default Content;
