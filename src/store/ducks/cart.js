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
      if (state.addedById.find(item => item.id === action.payload.id) === undefined) {
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
      return {
        ...state,
        addedById: [
          ...state.addedById.filter(product => product.id !== action.payload.id),
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            brand: action.payload.brand,
            quantity: action.payload.quantity + 1,
            subtotal: action.payload.price,
          },
        ],
      };

    case Types.SELECT_QUANTITY:
      return {
        ...state,
        addedById: [
          ...state.addedById.filter(product => product.id !== action.payload.id),
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            brand: action.payload.brand,
            quantity: action.payload.quantity,
            subtotal: action.payload.price * action.payload.quantity,
          },
        ],
      };

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
