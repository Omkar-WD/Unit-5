import { IS_LOGIN } from "./action";

let status = localStorage.getItem("isLogin") || "false";
const initialState = { isLogin: status == "true" ? true : false };

export const isLoginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOGIN:
      return { ...store, isLogin: payload };
    default:
      return store;
  }
};
