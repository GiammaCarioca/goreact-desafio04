export const Types = {
  ADD_TO_CART: 'products/ADD_TO_CART',
  SELECT_QUANTITY_ITEM: 'products/SELECT_QUANTITY_ITEM',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
};

const INITIAL_STATE = {
  totalItems: 0,
  cart: [],
  totalPrice: [],
  addedById: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      if (
        state.cart.find(item => item.id === action.payload.product.id) === undefined
        && state.addedById.find(item => item.id === action.payload.product.id) === undefined
      ) {
        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: [...state.totalPrice, action.payload.product.price],
          cart: [
            ...state.cart,
            {
              id: action.payload.product.id,
              name: action.payload.product.name,
              brand: action.payload.product.brand,
              image: action.payload.product.image,
              price: action.payload.product.price,
            },
          ],
          addedById: [
            ...state.addedById,
            {
              id: action.payload.product.id,
              quantity: 1,
            },
          ],
        };
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: [...state.totalPrice, action.payload.product.price],
        cart: [...state.cart],
        addedById: [
          ...state.addedById,
          state.addedById.find(item => item.id === action.payload.product.id),
        ],
      };

    case Types.SELECT_QUANTITY_ITEM:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: [...state.totalPrice, action.payload.price],
        cart: [...state.cart],
      };

    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== action.payload.id)],
      };

    default:
      return state;
  }
}

export const Creators = {
  addProduct: product => ({
    type: Types.ADD_TO_CART,
    payload: { product },
  }),

  selectQuantityItem: (id, price) => ({
    type: Types.SELECT_QUANTITY_ITEM,
    payload: { id, price },
  }),

  removeProduct: id => ({
    type: Types.REMOVE_FROM_CART,
    payload: { id },
  }),
};
