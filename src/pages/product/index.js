import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Container, Image, Wrapper } from './styles';

const Product = () => (
  <Wrapper>
    <Image>
      <img src="" alt="camiseta" />
    </Image>
    <Container>
      <strong>{}</strong>
      <p>{}</p>
      <span>
        R$
        {}
      </span>
      <button type="submit">Adicionar ao carrinho</button>
    </Container>
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
