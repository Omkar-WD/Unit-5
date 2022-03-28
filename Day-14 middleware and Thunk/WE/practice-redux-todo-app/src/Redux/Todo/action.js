// action type
export const GET_TODO = "GET_TODO";

// action creator
export const getTodo = (todo) => ({ type: GET_TODO, payload: todo });
