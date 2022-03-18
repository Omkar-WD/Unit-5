// const { createStore } = require("redux");

// to use like this just add "type":"module" in package.json
import { createStore } from "redux";

// class Store {
//   constructor(reducer, initialState) {
//     this.reducer = reducer;
//     this.state = initialState;
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }
// const reducer = (store, action) => {
//   if (action.type == "ADD_COUNT") {
//     store.count += 1;
//   }
// };

const reducer = (store, { type, payload }) => {
  switch (type) {
    case "ADD_COUNT":
      return { ...store, count: store.count + payload };
    case "REM_COUNT":
      return { ...store, count: store.count - payload };
    case "ADD_TODO":
      return { ...store, todos: [...store.todos, payload] };

    default:
      return store;
  }
};

const initialState = { count: 0, todos: [] };

// const store = new Store(reducer, initialState);
const store = createStore(reducer, initialState);

console.log(store.getState());

store.dispatch({ type: "ADD_COUNT", payload: 10 });
console.log(store.getState());

store.dispatch({ type: "REM_COUNT", payload: 1 });
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "helllo", status: false },
});
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "heyyyy", status: false },
});
console.log(store.getState());

store.dispatch({ type: "REM_COUNT", payload: 1 });
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "hiiii", status: false },
});
console.log(store.getState());
