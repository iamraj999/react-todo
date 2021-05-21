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
      let updatedTodos = state.todos.map((item, index) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          ...action.payload,
        };
      });
      return { ...state, todos: updatedTodos };
    case actionTypes.apiLoading: {
      return { ...state, loading: true, error: "" };
    }
    case actionTypes.apiLoaded: {
      return { ...state, todos: action.data, loading: false };
    }
    case actionTypes.apiError: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
};
