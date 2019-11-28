import { ADD_ITEMS } from '../actionTypes/cartActions';

export const addItems = (data) => ({
  payload: data,
  type: ADD_ITEMS,
});
