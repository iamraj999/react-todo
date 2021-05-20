import * as actionTypes from "./actionType";

let id = 0;
export const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case actionTypes.Add_Todo:
      id = id + 1;
      const todo = {
        title: action.payload.title,
        completed: false,
        id,
      };
      return { ...state, todos: state.todos.concat(todo) };
    case actionTypes.Delete_Todo:
      const updated = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: updated,
      };
    case actionTypes.Complete_Todo:
      state.todos.forEach((todo) => {
        if (todo.id == action.payload.id) {
          return (todo = action.payload);
        }
      });
      return {...state, todos: state.todos}
    default:
      return state;
  }
};
