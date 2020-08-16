import * as Types from '../constants/ActionTypes';

const initialState = {
  data: [],
  limit: 12,
  keyword: '',
  category: '',
  total: 13,
  isLoadMore: true,
};

const products = (state = initialState, action) => {
  let newState = {};
  let isLoadMore;
  let { limit, total } = state;
  let { products, keyword, category } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      isLoadMore = total <= limit ? false : true;
      newState = {
        ...state,
        data: products.data,
        total: products.total,
        isLoadMore,
      };
      return newState;
    case Types.LOAD_MORE:
      let newLimit = limit + 8;
      isLoadMore = newLimit > total ? false : true;
      newState = {
        ...state,
        limit: newLimit,
        isLoadMore,
      };
      return newState;
    case Types.SET_KEYWORD:
      newState = {
        ...state,
        keyword,
      };
      return newState;
    case Types.SET_CATEGORY:
      newState = {
        ...state,
        category,
      };
      return newState;
    case Types.SET_DEFAULT:
      newState = {
        ...state,
        limit: 12,
        keyword: '',
        isLoadMore: true,
      };
      return newState;
    default:
      return state;
  }
};

export default products;
