import { createStore } from "redux";

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/index";

// export default store = createStore(reducer);

const rootReducer = combineReducers({ userReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
