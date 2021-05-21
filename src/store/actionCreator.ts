import * as actionTypes from "./actionType";
import Api from "./api"

export const AddTodo = (payload) =>{
  const action = {
    type: actionTypes.Add_Todo,
    payload,
  };
  return (dispatch) => {
    dispatch(action);
  };
}
export const Delete_Todo = (payload) =>{
  const action = {
    type: actionTypes.Delete_Todo,
    payload,
  };
  return (dispatch) => {
    dispatch(action);
  };
}
export const Complete_Todo = (payload) =>{
  const action = {
    type: actionTypes.Complete_Todo,
    payload,
  };
  return (dispatch) => {
    dispatch(action);
  };
}
export const loadTodos = () => dispatch => {
  dispatch({ type:actionTypes.apiLoading });
  Api.getTodos().then(response => response.json()).then(data => dispatch({ type: actionTypes.apiLoaded, data }), error => dispatch({ type: actionTypes.apiError, error: error.message || 'Unexpected Error!!!' }))
};
