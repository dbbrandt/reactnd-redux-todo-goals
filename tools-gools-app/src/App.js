import React from "react";
import { connect } from "react-redux";
import { handleReceiveData} from "./actions/share";
import Todos from "./components/Todos";
import Goals from "./components/Goals";

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
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default connect(state => ({ ...state }))(App);
