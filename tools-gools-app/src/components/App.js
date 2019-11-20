import React from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/Store";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    return this.props.loading ? (
      <h3>Loading....</h3>
    ) : (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

const ConnectedApp = connect(state => ({ ...state }))(App);

export default ConnectedApp;
