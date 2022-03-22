import { ADD_COUNT, SUB_COUNT, ADD_TODO } from "./action";

export const reducer = (store, { type, payload }) => {
  console.log("Store", store);
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };
    case SUB_COUNT:
      return { ...store, count: store.count - payload };
    case ADD_TODO:
      return { ...store, todo: [...store.todo, payload] };
    default:
      return store;
  }
};
