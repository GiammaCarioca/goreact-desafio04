export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  ADD_PRODUCT: 'products/ADD_PRODUCT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  cart: [],
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload.product],
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
    type: Types.ADD_PRODUCT,
    payload: { product },
  }),
};
