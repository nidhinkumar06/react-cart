import { ADD_QUANTITY } from '../actionTypes/cartActions';

export const addQuantity = (id) => ({
  payload: id,
  type: ADD_QUANTITY,
});
