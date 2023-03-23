import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import todoReducer from "./todo";
const reducer = combineReducers({
 
  todoReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;