import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Wrapper, ProductDetails, Image, Container,
} from './styles';

const intlMonetary = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimunFractionDigits: 2,
});

const Product = ({ products, match, addProduct }) => (
  <Wrapper>
    {products.data.filter(product => product.id === parseInt(match.params.id, 10)).map(product => (
      <ProductDetails key={product.id}>
        <Image>
          <img src={product.image} alt={product.name} />
        </Image>
        <Container>
          <strong>{product.name}</strong>
          <p>{product.brand}</p>
          <span>{intlMonetary.format(product.price)}</span>
          <button type="button" value="1" onClick={e => addProduct(product, e.target.value)}>
            Adicionar ao carrinho
          </button>
        </Container>
      </ProductDetails>
    ))}
  </Wrapper>
);

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
