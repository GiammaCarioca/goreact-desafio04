export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  ADD_TO_CART: 'products/ADD_TO_CART',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  cart: [],
  quantity: 0,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ADD_TO_CART:
      const result = state.cart.find(item => item.id === action.payload.product.id);

      if (result === undefined) {
        return {
          ...state,
          quantity: state.quantity + 1,
          cart: [
            ...state.cart,
            {
              id: action.payload.product.id,
              name: action.payload.product.name,
              brand: action.payload.product.brand,
              image: action.payload.product.image,
              price: action.payload.product.price,
              quantity: 1,
            },
          ],
        };
      }
      return {
        ...state,
        quantity: state.quantity + 1,
        cart: [...state.cart],
      };

    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        quantity: state.quantity - 1,
        cart: [...state.cart.filter(product => product.id !== action.payload.id)],
      };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  addProduct: product => ({
    type: Types.ADD_TO_CART,
    payload: { product },
  }),

  removeProduct: id => ({
    type: Types.REMOVE_FROM_CART,
    payload: { id },
  }),
};
