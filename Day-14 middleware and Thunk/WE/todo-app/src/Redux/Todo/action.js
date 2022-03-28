import axios from "axios";

// action type
export const GET_TODO = "GET_TODO";
export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_ERROR = "GET_TODO_ERROR";

// action creator
export const getTodo = (todo) => ({ type: GET_TODO, payload: todo });
export const getTodoLoading = () => ({ type: GET_TODO_LOADING });
export const getTodoError = () => ({ type: GET_TODO_ERROR });

// action as a function
export const getTodoData = () => async (dispatch) => {
  dispatch(getTodoLoading());
  const { data } = await axios.get("http://localhost:3001/todos");
  dispatch(getTodo(data));
};
