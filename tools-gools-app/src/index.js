import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(
    reducer,
    middleware
);

ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>,
                document.getElementById("root"));

