import { ADD_TODO, DELETE_TODO } from './types';
import { v4 as uuid } from 'uuid';

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
