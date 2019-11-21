import API from "goals-todos-api";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}
function deleteTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function handleAddTodo(name, cb) {
  return dispatch => {
    return API.saveTodo(name)
      .then(todo => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => {
        alert("Sorry, an error occured. Try again.");
      });
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(deleteTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert("An error occured. Try again.");
    });
  };
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("An error occured. Try again.");
    });
  };
}
