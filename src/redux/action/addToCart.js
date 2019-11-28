import { ADD_TO_CART } from '../actionTypes/cartActions';

export const addToCart = (id) => ({
  payload: id,
  type: ADD_TO_CART,
});
