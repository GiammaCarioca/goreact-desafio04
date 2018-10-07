import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Container, Product } from './styles';

import Loading from '../../components/Loading';

const intlMonetary = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimunFractionDigits: 2,
});

class Category extends Component {
  static propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          brand: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;

    if (prevProps.match.params.id !== id) {
      this.loadProducts();
    }
  }

  loadProducts = () => {
    const { getProductsRequest } = this.props;
    const { id } = this.props.match.params;

    getProductsRequest(id);
  };

  renderProducts = () => {
    const { products } = this.props;

    return (
      <Container>
        {products.data.map(product => (
          <Product key={product.id} to={`/products/${product.id}`}>
            <img src={product.image} alt="camiseta" />
            <strong>{product.name}</strong>
            <p>{product.brand}</p>
            <span>{intlMonetary.format(product.price)}</span>
          </Product>
        ))}
      </Container>
    );
  };

  render() {
    const { products } = this.props;

    return products.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderProducts()
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
