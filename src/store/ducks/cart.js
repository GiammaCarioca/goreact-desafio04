export const Types = {
  ADD_TO_CART: 'products/ADD_TO_CART',
  SELECT_QUANTITY_ITEM: 'products/SELECT_QUANTITY_ITEM',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
};

const INITIAL_STATE = {
  totalItems: 0,
  totalPrice: [],
  addedById: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      if (state.addedById.find(item => item.id === action.payload.product.id) === undefined) {
        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: [...state.totalPrice, action.payload.product.price],
          addedById: [
            ...state.addedById,
            {
              id: action.payload.product.id,
              name: action.payload.product.name,
              image: action.payload.product.image,
              price: action.payload.product.price,
              brand: action.payload.product.brand,
              quantity: action.payload.product.quantity,
              subtotal: action.payload.product.price,
            },
          ],
        };
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: [...state.totalPrice, action.payload.product.price],
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
        addedById: [...state.addedById],
      };

    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        addedById: [...state.addedById.filter(product => product.id !== action.payload.product.id)],
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

  selectQuantityItem: (id, quantity = 1) => ({
    type: Types.SELECT_QUANTITY_ITEM,
    payload: { id, quantity },
  }),

  removeProduct: id => ({
    type: Types.REMOVE_FROM_CART,
    payload: { id },
  }),
};
