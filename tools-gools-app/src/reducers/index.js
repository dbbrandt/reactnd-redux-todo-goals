import todos from "./todos";
import goals from "./goals";
import loading from "./loading";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ todos, goals, loading });
