import { LOGIN, LOGOUT } from '../actionTypes/authActions';
const INITIAL_STATE = {
   email: "user@gmail.com",
   password: "123456",
   isAuthenticated: false
};

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            {
                console.log("payload", action.payload);
                
                return {
                    ...state,
                    isAuthenticated: action.payload
                }
            }
        case LOGOUT:
            {
                console.log("logout got called");
                
                return {
                    ...state,
                    isAuthenticated: false
                }
            }
        default:
            return state;
    }
}

export default authReducer;