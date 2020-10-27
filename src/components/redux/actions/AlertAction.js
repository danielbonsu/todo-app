import { SET_TODO_ALERT, REMOVE_TODO_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setTodoAlert = (msg, type) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_TODO_ALERT,
    payload: { msg, type, id },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_TODO_ALERT,
      payload: id,
    });
  }, 5000);
};
