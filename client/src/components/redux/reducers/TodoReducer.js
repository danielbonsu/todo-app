import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = { todos: [] };

export const TodoReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
