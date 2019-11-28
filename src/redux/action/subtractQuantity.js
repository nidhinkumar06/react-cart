import { SUB_QUANTITY } from '../actionTypes/cartActions';

export const subtractQuantity = (id) => ({
  payload: id,
  type: SUB_QUANTITY,
});
