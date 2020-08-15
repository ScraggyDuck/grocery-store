import * as Types from '../constants/ActionTypes';
import * as ProductServices from '../services/productServices';

export const actFetchAllProductsRequest = (limit) => {
  return async (dispatch) => {
    const filters = { limit, offset: 0 };
    const {
      data: { data: productList },
    } = await ProductServices.getProducts(filters);
    dispatch(actFetchAllProducts(productList));
  };
};

export const actFetchAllProducts = (products) => ({
  type: Types.FETCH_PRODUCTS,
  products,
});

export const actLoadMore = () => ({
  type: Types.LOAD_MORE,
});
