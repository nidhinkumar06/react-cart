import { REMOVE_ITEM } from '../actionTypes/cartActions';

export const removeItem = (id) => ({
  payload: id,
  type: REMOVE_ITEM,
});
