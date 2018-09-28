import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Container, Product } from './styles';

class Category extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    const { id } = this.props.match.params;

    this.props.getProductsRequest(id);
  };

  render() {
    return (
      <Container>
        {this.props.products.data.map(product => (
          <Product key={product.id} to="/products/:id">
            <img src={product.image} alt="camiseta" />
            <strong>{product.name}</strong>
            <p>{product.brand}</p>
            <span>
              R$
              {product.price}
            </span>
          </Product>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
