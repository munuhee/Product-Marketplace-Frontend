import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import postsReducer from "./postsReducer";
import productsReducer from "./productsReducer"

const rootReducer = combineReducers({
    products: productsReducer,
});

export default rootReducer