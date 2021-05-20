import * as React from "react";
import { AddTodo, Delete_Todo, Complete_Todo } from "../store/actionCreator";
import { connect } from "react-redux";
import { Checkbox } from "@material-ui/core";

class Todos extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: false,
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  deleteTodo(id) {
    this.props.deleteTodo({ id });
  }
  addTodo() {
    const { title } = this.state;
    this.props.addTodo({ title });
    this.setState({ title: "" });
  }
  completeTodo(e, todo) {
    todo.completed = e.target.checked;
    this.props.completeTodo(todo);
  }
  render() {
    return (
      <main>
        <input
          id="title"
          placeholder="Add Todo title"
          value={this.state.title}
          onChange={this.handleChange}
        ></input>
        <button
          onClick={this.addTodo}
          disabled={this.state.title ? false : true}
        >
          Add Todo
        </button>
        <ul className="todo-list">
          {this.props.todos.map((todo) => {
            const id = todo.id.toString();
            return (
              <div className="todo-container" key={id}>
                <input
                  className="todo-checkbox"
                  type="checkbox"
                  onChange={(e) => this.completeTodo(e, todo)}
                />
                <button
                  className="delete-todo"
                  onClick={() => this.deleteTodo(todo.id)}
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
  }
}
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(AddTodo(todo)),
    deleteTodo: (id) => dispatch(Delete_Todo(id)),
    completeTodo: (todo) => dispatch(Complete_Todo(todo)),
  };
};
const TodoComponent = connect(mapStateToProps, mapDispatchToProps)(Todos);
export default TodoComponent;