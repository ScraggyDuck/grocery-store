import * as Types from '../constants/ActionTypes';

const initialState = {
  data: [],
  limit: 12,
};

const products = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      let products = action.products;
      newState = {
        ...state,
        data: products,
      };
      return newState;
    case Types.LOAD_MORE:
      let { limit } = state;
      newState = {
        ...state,
        limit: limit + 8,
      };
      return newState;
    default:
      return state;
  }
};

export default products;
