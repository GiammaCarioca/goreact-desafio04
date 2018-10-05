import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Category from '../pages/category';
import productDetails from '../pages/productDetails';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/products/:id" component={productDetails} />
    <Route path="/cart" component={Cart} />
    <Route path="/category_products/:id" component={Category} />
  </Switch>
);

export default Routes;
