import * as actionTypes from "./actionType";

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

