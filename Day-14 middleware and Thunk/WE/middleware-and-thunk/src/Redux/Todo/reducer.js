import { GET_TODO, GET_TODO_LOADING } from "./action";

const initialState = { todo: [], loading: false, error: false };

export const todoReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO:
      return { ...store, todo: payload, loading: false };
    case GET_TODO_LOADING:
      return { ...store, loading: true };
    default:
      return store;
  }
};
