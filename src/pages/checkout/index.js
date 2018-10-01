import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { ShoppingList, Soma } from './styles';

const Checkout = ({ products, removeProduct }) => (
  <Fragment>
    <ShoppingList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Produto</th>
          <th>Valor</th>
          <th>Qtd</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {products.cart.map(product => (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt="camiseta trok" />
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
              <div>2</div>
            </td>
            <td>R$ 100,00</td>
            <td>
              <button type="submit" onClick={() => removeProduct(product.id)}>
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </ShoppingList>
    <Soma>
      <strong>Total</strong>
      <span>R$ 300,00</span>
    </Soma>
  </Fragment>
);

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
