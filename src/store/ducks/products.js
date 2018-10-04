export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  ADD_TO_CART: 'products/ADD_TO_CART',
  SELECT_QUANTITY_ITEM: 'products/SELECT_QUANTITY_ITEM',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
};

const INITIAL_STATE = {
  loading: false,
  totalItems: 0,
  data: [],
  cart: [],
  quantities: [],
  totalPrice: [],
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ADD_TO_CART:
      if (state.cart.find(item => item.id === action.payload.product.id) === undefined) {
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
        };
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: [...state.totalPrice, action.payload.product.price],
        cart: [...state.cart],
      };

    case Types.SELECT_QUANTITY_ITEM:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        quantities: [
          ...state.quantities,
          {
            id: action.payload.id,
            newQuantity: action.payload.newQuantity,
            subtotal: action.payload.subtotal,
          },
        ],
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

  selectQuantityItem: (id, newQuantity, subtotal) => ({
    type: Types.SELECT_QUANTITY_ITEM,
    payload: { id, newQuantity, subtotal },
  }),
};
