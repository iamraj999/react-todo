
import { Todos } from './Todos';
import * as React from "react";
import {
  AddTodo,
  Delete_Todo,
  Complete_Todo,
  loadTodos,
} from "../store/actionCreator";
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Todos Component', () => {
  it('renders correctly', () => {
    const props = {
      todos: []
    }
    const tree = renderer
      .create(<Todos {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should disable the add todo button when no title is provided', () => {
    const props = {
      todos: []
    }
    const wrapper = shallow(<Todos {...props} />);
    expect(wrapper.find('button.addButton').props().disabled).toBe(true);
  });
  it('should enable the add todo button when title is provided', () => {
    const props = {
      todos: []
    }
    const wrapper = shallow(<Todos {...props} />);
    wrapper.setState({ title: 'test' })
    expect(wrapper.find('button.addButton').props().disabled).toBe(false);
  });
});