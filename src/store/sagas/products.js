import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.id}`);

    yield put(ProductsActions.getProductsSuccess(response.data.products));
  } catch (error) {
    console.log(error);
  }
}
