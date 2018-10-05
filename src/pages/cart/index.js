import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Container, ShoppingList, SomaTotal } from './styles';

class Cart extends Component {
  selectQuantity = (e, product) => {
    const { id } = product;
    const { price } = product;

    this.props.selectQuantityItem(id, price);
  };

  render() {
    return (
      <Container>
        <ShoppingList cellPadding={0} cellSpacing={0}>
          {!!this.props.cart.totalItems && (
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
            {this.props.cart.cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <p>{product.brand}</p>
                </td>
                <td>
                  <span>{`R$ ${product.price}`}</span>
                </td>
                <td>
                  <div>
                    <input
                      type="number"
                      value="1"
                      onChange={e => this.selectQuantity(e, product)}
                    />
                  </div>
                </td>
                <td>
                  <span>{`R$ ${product.price}`}</span>
                </td>
                <td>
                  <button
                    type="submit"
                    onClick={() => this.props.removeProduct(product.id, product.price)}
                  >
                    <i className="fa fa-times" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ShoppingList>

        {!!this.props.cart.totalItems && (
          <SomaTotal>
            <strong>Total</strong>
            <span>
              R$
              {' '}
              {this.props.cart.totalPrice.reduce(
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
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
