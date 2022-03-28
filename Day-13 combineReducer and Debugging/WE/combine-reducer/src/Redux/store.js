import { createStore, combineReducers } from "redux";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

// export const store = createStore(reducer, { count: 0, todo: [] });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("initial state", store.getState());
