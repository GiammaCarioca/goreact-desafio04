import update from 'immutability-helper';
import _ from 'lodash';

export const Types = {
  ADD_TO_CART: 'products/ADD_TO_CART',
  SELECT_QUANTITY: 'products/SELECT_QUANTITY',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
};

const INITIAL_STATE = {
  addedById: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      const item = _.findKey(state.addedById, ['id', action.payload.id]);

      if (!item) {
        return {
          ...state,
          addedById: [
            ...state.addedById,
            {
              id: action.payload.id,
              name: action.payload.name,
              image: action.payload.image,
              price: action.payload.price,
              brand: action.payload.brand,
              quantity: action.payload.quantity,
              subtotal: action.payload.price,
            },
          ],
        };
      }
      return state;

    case Types.SELECT_QUANTITY:
      const i = _.findKey(state.addedById, ['id', action.payload.id]);

      if (i) {
        return update(state, {
          addedById: {
            [i]: {
              quantity: { $set: action.payload.quantity },
              subtotal: {
                $set: state.addedById[i].price * action.payload.quantity,
              },
            },
          },
        });
      }

      return state;

    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        addedById: [...state.addedById.filter(product => product.id !== action.payload.id)],
      };

    default:
      return state;
  }
}

export const Creators = {
  addProduct: ({
    id, name, image, price, brand,
  }, quantity) => ({
    type: Types.ADD_TO_CART,
    payload: {
      id,
      name,
      image,
      price,
      brand,
      quantity,
    },
  }),

  selectQuantity: ({
    id, name, image, price, brand,
  }, quantity) => ({
    type: Types.SELECT_QUANTITY,
    payload: {
      id,
      name,
      image,
      price,
      brand,
      quantity,
    },
  }),

  removeProduct: id => ({
    type: Types.REMOVE_FROM_CART,
    payload: { id },
  }),
};
