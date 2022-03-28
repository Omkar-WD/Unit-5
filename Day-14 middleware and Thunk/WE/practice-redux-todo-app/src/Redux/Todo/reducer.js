import { GET_TODO } from "./action";

const initialState = { todo: [] };

export const todoReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO:
      return { ...store, todo: payload };
    default:
      return store;
  }
};
