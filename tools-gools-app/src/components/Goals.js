import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddGoal, handleDeleteGoal} from "../actions/Store";
import List from './List';

class Goals extends Component {
  addItem = e => {
    e.preventDefault();
    return this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    const { goals } = this.props;
    return (
      <div>
        <h1>Goals List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List remove={this.removeItem} items={goals} />
      </div>
    );
  }
}

const ConnectedGoals = connect(state => ({
  goals: state.goals
}))(Goals);

export default ConnectedGoals;
