import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Container, ShoppingList, SomaTotal } from './styles';

class Cart extends Component {
  state = {
    userInput: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { userInput } = this.state;
  };

  render() {
    return (
      <Container>
        <ShoppingList cellPadding={0} cellSpacing={0}>
          {!!this.props.products.quantityTotal && (
            <thead>
              <tr>
                <th />
                <th>Produto</th>
                <th>Valor</th>
                <th>Qtd</th>
                <th>Subtotal</th>
              </tr>
            </thead>
          )}
          <tbody>
            {this.props.products.cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <p>{product.brand}</p>
                </td>
                <td>
                  <span>
                    R$
                    {product.price}
                  </span>
                </td>
                <td>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="1"
                      value={this.userInput}
                      onChange={e => this.setState({ userInput: e.target.value })}
                    />
                  </form>
                </td>
                <td>
                  R$
                  {product.price}
                </td>
                <td>
                  <button type="submit" onClick={() => this.props.removeProduct(product.id)}>
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ShoppingList>
        {!!this.props.products.quantityTotal && (
          <SomaTotal>
            <strong>Total</strong>
            <span>
              R$
              {' '}
              {this.props.products.sum.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0,
              )}
            </span>
          </SomaTotal>
        )}
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
)(Cart);
