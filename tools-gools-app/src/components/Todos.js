import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTodo, handleDeleteTodo, handleToggleTodo} from "../actions/todos";
import List from './List';

class Todos extends Component {
  addItem = e => {
    e.preventDefault();
    return this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  toggleItem = id => {
    this.props.dispatch(handleToggleTodo(id));
  };

  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List toggle={this.toggleItem} remove={this.removeItem} items={todos} />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);

