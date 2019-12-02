import {combineReducers} from 'redux';
import { reducer as reducerForm } from 'redux-form';
import cartReducer from './cart';
import authReducer from './auth';

const rootReducer = combineReducers({form: reducerForm, cart: cartReducer, auth: authReducer});

export default rootReducer;
