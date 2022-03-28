import { LOGIN } from "./action";
const initialState = { user: {} };

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, user: payload };
    default:
      return store;
  }
};
