export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  ADD_PRODUCT: 'products/ADD_PRODUCT',
  REMOVE_PRODUCT: 'products/REMOVE_PRODUCT',
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
    case Types.REMOVE_PRODUCT:
      return {
        ...state,
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
    type: Types.ADD_PRODUCT,
    payload: { product },
  }),

  removeProduct: id => ({
    type: Types.REMOVE_PRODUCT,
    payload: { id },
  }),
};
