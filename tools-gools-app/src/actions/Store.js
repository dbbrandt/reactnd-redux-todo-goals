import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers";


const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};


const Store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default Store;
