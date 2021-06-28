import { Todos } from "./Todos";
import * as React from "react";
import {
  AddTodo,
  Delete_Todo,
  Complete_Todo,
  loadTodos,
} from "../store/actionCreator";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Todos Component", () => {
  it("renders correctly", () => {
    const props = {
      todos: [],
      loading: false,
      error: "",
      loadTodos: jest.fn(),
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      completeTodo: jest.fn(),
    };
    const wrapper = shallow(<Todos {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should disable the add todo button when no title is provided", () => {
    const props = {
      todos: [],
      loading: false,
      error: "",
      loadTodos: jest.fn(),
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      completeTodo: jest.fn(),
    };
    const wrapper = shallow(<Todos {...props} />);
    expect(wrapper.find("button.addButton").props().disabled).toBe(true);
  });
  it("should enable the add todo button when title is provided", () => {
    const props = {
      todos: [],
      loading: false,
      error: "",
      loadTodos: jest.fn(),
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      completeTodo: jest.fn(),
    };
    const wrapper = shallow(<Todos {...props} />);
    const event = {
      target: { value: "test" },
    };
    wrapper.find("input").simulate("change", event);
    expect(wrapper.find("button.addButton").props().disabled).toBe(false);
  });
});
