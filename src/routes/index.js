import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Category from '../pages/category';
import productDetails from '../pages/productDetails';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products/:id" component={productDetails} />
    <Route path="/cart" component={Cart} />
    <Route path="/category_products/:id" component={Category} />
  </Switch>
);

export default Routes;
