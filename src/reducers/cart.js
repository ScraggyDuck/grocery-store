import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let newState = [];
  let index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      const product = action.payload;
      newState = [...state];
      index = findIndexById(newState, product._id);
      if (index < 0) newState.push(product);
      else newState[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case Types.INCREASE_QUANTITY:
      newState = [...state];
      index = findIndexById(newState, action.id);
      if (index >= 0) newState[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case Types.DECREASE_QUANTITY:
      newState = [...state];
      index = findIndexById(newState, action.id);
      if (index >= 0 && newState[index].quantity > 1)
        newState[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case Types.DELETE_PRODUCT:
      newState = [...state];
      index = findIndexById(newState, action.id);
      if (index >= 0) {
        newState.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

const findIndexById = (arr, id) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === id) return i;
    }
  }
  return -1;
};
export default cart;
