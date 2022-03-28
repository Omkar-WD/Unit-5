import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

const loggerMiddleware1 = (store) => (next) => (action) => {
  console.log("t1 start");
  if (typeof action === "function") return action(store.dispatch);
  next(action); //go to the next middleware or next step
  console.log("t1 end");
};
// or (above method and below method both are same)
const loggerMiddleware2 = function (store) {
  return function (next) {
    return function (action) {
      console.log("t2 start");
      next(action); //go to the next middleware or next step
      console.log("t2 end");
    };
  };
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(loggerMiddleware1, loggerMiddleware2),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log("initial state", store.getState());
