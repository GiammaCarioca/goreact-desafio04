import React, { Fragment } from 'react';
import { ShoppingList, Soma } from './styles';

import Camiseta from '../../assets/images/camisa@2x.png';

const Checkout = () => (
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
        <tr>
          <td>
            <img src={Camiseta} alt="camiseta trok" />
          </td>
          <td>
            <strong>Camiseta Trok</strong>
            <p>Element</p>
          </td>
          <td>
            <span>R$ 50,00</span>
          </td>
          <td>
            <div>2</div>
          </td>
          <td>R$ 100,00</td>
          <td>
            <button type="submit">
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Camiseta} alt="camiseta trok" />
          </td>
          <td>
            <strong>Camiseta Trok</strong>
            <p>Element</p>
          </td>
          <td>R$ 50,00</td>
          <td>
            <div>2</div>
          </td>
          <td>R$ 100,00</td>
          <td>
            <button type="submit">
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Camiseta} alt="camiseta trok" />
          </td>
          <td>
            <strong>Camiseta Trok</strong>
            <p>Element</p>
          </td>
          <td>R$ 50,00</td>
          <td>
            <div>2</div>
          </td>
          <td>R$ 100,00</td>
          <td>
            <button type="submit">
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Camiseta} alt="camiseta trok" />
          </td>
          <td>
            <strong>Camiseta Trok</strong>
            <p>Element</p>
          </td>
          <td>R$ 50,00</td>
          <td>
            <div>2</div>
          </td>
          <td>R$ 100,00</td>
          <td>
            <button type="submit">
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
      </tbody>
    </ShoppingList>
    <Soma>
      <strong>Total</strong>
      <span>R$ 300,00</span>
    </Soma>
  </Fragment>
);

export default Checkout;
