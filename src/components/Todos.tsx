import * as React from "react";
import {
  AddTodo,
  Delete_Todo,
  Complete_Todo,
  loadTodos,
} from "../store/actionCreator";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

export const Todos = ({
  todos,
  loading,
  error,
  loadTodos,
  addTodo,
  deleteTodo,
  completeTodo,
}) => {
  const [title, setTitle] = useState("");
  function handleChange(e) {
    setTitle(e.target.value);
  }
  return (
    <main>
      <input
        id="title"
        placeholder="Add Todo title"
        value={title}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        className="addButton"
        onClick={() =>{ addTodo({ title })
      setTitle("")}}
        disabled={title ? false : true}
      >
        Add Todo
      </button>
      <button onClick={() => loadTodos()}>Load from api</button>
      {loading ? (
        <main>
          <CircularProgress />
        </main>
      ) : null}
      <ul className="todo-list">
        {todos.map((todo:any) => {
          const id = todo.id.toString();
          return (
            <div className="todo-container" key={id}>
              <input
                className="todo-checkbox"
                type="checkbox"
                onChange={(e) => {
                  todo.completed = e.target.checked;
                  completeTodo(e, todo);
                }}
                checked={todo.completed}
              />
              <button
                className="delete-todo"
                onClick={() => {const id = todo.id;
                  deleteTodo({id})}}
              >
                Delete
              </button>
              <li className={todo.completed ? "todo-completed" : ""}>
                {todo.title}
              </li>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, loading: state.loading, error:state.error };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(AddTodo(todo)),
    deleteTodo: (id) => dispatch(Delete_Todo(id)),
    completeTodo: (todo) => dispatch(Complete_Todo(todo)),
    loadTodos: () => dispatch(loadTodos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
