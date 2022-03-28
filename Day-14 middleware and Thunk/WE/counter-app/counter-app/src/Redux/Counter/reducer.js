import { ADD_COUNT, SUB_COUNT } from "./action";

const initialState = { count: 0 };

export const counterReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };
    case SUB_COUNT:
      return { ...store, count: store.count - payload };
    default:
      return store;
  }
};
