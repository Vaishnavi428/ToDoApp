export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});
