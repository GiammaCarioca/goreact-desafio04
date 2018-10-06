import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Container, ShoppingList, SomaTotal } from './styles';

const intlMonetary = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimunFractionDigits: 2,
});

const Cart = ({ cart, selectQuantity, removeProduct }) => (
  <Container>
    <ShoppingList cellPadding={0} cellSpacing={0}>
      {!!cart.addedById[0] && (
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
        {cart.addedById.map(product => (
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
                  min="0"
                  value={product.quantity}
                  onChange={e => selectQuantity(product, e.target.value)}
                />
              </div>
            </td>
            <td>
              <span>{intlMonetary.format(product.subtotal)}</span>
            </td>
            <td>
              <button type="submit" onClick={() => removeProduct(product.id, product.price)}>
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </ShoppingList>

    {!!cart.addedById[0] && (
      <SomaTotal>
        <strong>Total</strong>
        <span>
          {intlMonetary.format(
            cart.addedById
              .map(item => parseInt(item.subtotal, 10))
              .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
          )}
        </span>
      </SomaTotal>
    )}
  </Container>
);

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
