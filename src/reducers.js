import { ADD_TODO, TOGGLE_TODO, DELETE_ALL_TODOS } from './actions';

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case DELETE_ALL_TODOS:
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
