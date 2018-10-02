import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { ShoppingList } from './styles';

const Checkout = ({ products, removeProduct }) => (
  <ShoppingList cellPadding={0} cellSpacing={0}>
    {!!products.quantity && (
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
      {products.cart.map(product => (
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
            <div>{product.quantity}</div>
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
);

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
