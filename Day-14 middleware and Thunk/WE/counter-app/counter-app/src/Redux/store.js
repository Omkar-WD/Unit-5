import { createStore, combineReducers } from "redux";
import { counterReducer } from "./Counter/reducer";

const rootReducer = combineReducers({
  count: counterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
