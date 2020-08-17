import axios from 'axios';
import queryString from 'query-string';
import * as BaseValue from '../constants/BaseValue';

export const getProducts = async (filters) => {
  const paramsString = queryString.stringify(filters);
  const { data } = await axios.get(
    `${BaseValue.API_URL}/${BaseValue.GET_PRODUCTS}/?${paramsString}`
  );
  return data;
};

export const getProductBySlug = async (slug) => {
  const { data } = await axios.get(
    `${BaseValue.API_URL}/${BaseValue.GET_PRODUCTS}/${slug}`
  );
  return data;
};
