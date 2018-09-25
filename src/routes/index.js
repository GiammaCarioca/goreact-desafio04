import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Product from '../pages/product';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/products/:id" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
