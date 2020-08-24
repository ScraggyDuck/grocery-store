import axios from 'axios';
import * as BaseValue from '../constants/BaseValue';

export const login = async (user) => {
  const { data } = await axios.post(
    `${BaseValue.API_URL}/${BaseValue.LOGIN}`,
    user
  );
  return data;
};

export const signup = async (user) => {
  const { data } = await axios.post(
    `${BaseValue.API_URL}/${BaseValue.SIGNUP}`,
    user
  );
  return data;
};
