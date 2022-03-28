// action type
export const ADD_TODO = "ADD_TODO";

// action creator
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
