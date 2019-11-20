import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConnectedApp from "./components/App";
import { Provider } from "react-redux";
import Store from "./actions/Store"

ReactDOM.render(<Provider store={Store}>
                  <ConnectedApp />
                </Provider>,
                document.getElementById("root"));

