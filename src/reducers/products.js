import * as Types from '../constants/ActionTypes';

const initialState = {
  data: [],
  limit: 12,
  keyword: '',
};

const products = (state = initialState, action) => {
  let newState = {};
  let { products, keyword } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
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
    case Types.SET_KEYWORD:
      newState = {
        ...state,
        keyword,
      };
      return newState;
    default:
      return state;
  }
};

export default products;
