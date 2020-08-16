import * as Types from '../constants/ActionTypes';
import * as ProductServices from '../services/productServices';

export const actFetchAllProductsRequest = (products) => {
  return async (dispatch) => {
    const { limit, keyword, category } = products;
    let filters = { limit, offset: 0 };
    if (keyword) {
      filters = { ...filters, keyword };
    }
    if (category) {
      filters = { ...filters, category };
    }
    const { data } = await ProductServices.getProducts(filters);
    dispatch(actFetchAllProducts(data));
  };
};

export const actFetchAllProducts = (products) => ({
  type: Types.FETCH_PRODUCTS,
  products,
});

export const actLoadMore = () => ({
  type: Types.LOAD_MORE,
});

export const actSetKeyword = (keyword) => ({
  type: Types.SET_KEYWORD,
  keyword,
});

export const actSetCategory = (category) => ({
  type: Types.SET_CATEGORY,
  category,
});

export const actSetDefault = () => ({
  type: Types.SET_DEFAULT,
});
