import { LOGIN } from '../actionTypes/authActions';

export const login = (data) => ({
  payload: data,
  type: LOGIN,
});
