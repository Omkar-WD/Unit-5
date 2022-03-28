import { todoReducer } from "./Todo/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
