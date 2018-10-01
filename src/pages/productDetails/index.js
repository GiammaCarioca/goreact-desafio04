import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import {
  Wrapper, ProductDetails, Image, Container,
} from './styles';

const Product = ({ products, match }) => (
  <Wrapper>
    {products.data.filter(product => product.id === parseInt(match.params.id, 10)).map(product => (
      <ProductDetails key={product.id}>
        <Image>
          <img src={product.image} alt="camiseta" />
        </Image>
        <Container>
          <strong>{product.name}</strong>
          <p>{product.brand}</p>
          <span>
            R$
            {product.price}
          </span>
          <button type="submit">Adicionar ao carrinho</button>
        </Container>
      </ProductDetails>
    ))}
  </Wrapper>
);

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
