import * as Types from '../constants/ActionTypes';

export const actAddToCart = (payload) => ({
  type: Types.ADD_TO_CART,
  payload,
});

export const actIncreaseQuantity = (id) => ({
  type: Types.INCREASE_QUANTITY,
  id,
});

export const actDecreaseQuantity = (id) => ({
  type: Types.DECREASE_QUANTITY,
  id,
});

export const actDeleteProduct = (id) => ({
  type: Types.DELETE_PRODUCT,
  id,
});
