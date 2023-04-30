import { combineReducers } from "redux";
import productsReducer from "./productsReducer"
import { authReducer } from "./authReducers";

const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer,
});

export default rootReducer