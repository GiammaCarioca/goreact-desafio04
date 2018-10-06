import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Container, ShoppingList, SomaTotal } from './styles';

const intlMonetary = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimunFractionDigits: 2,
});

class Cart extends Component {
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
            {this.props.cart.addedById.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <p>{product.brand}</p>
                </td>
                <td>
                  <span>{intlMonetary.format(product.price)}</span>
                </td>
                <td>
                  <div>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={e => this.props.selectQuantity(product, e.target.value)}
                    />
                  </div>
                </td>
                <td>
                  <span>{`R$ ${product.subtotal}`}</span>
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
              {intlMonetary.format(
                this.props.cart.totalPrice.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0,
                ),
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
