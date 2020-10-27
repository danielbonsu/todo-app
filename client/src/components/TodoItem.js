import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './redux/actions/TodoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='item'>
      <p className='todo-notes'>{todo.todoNotes}</p>
      <div className='todo-edits'>
        <i
          class='fas fa-trash-alt'
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        ></i>
        <i class='fas fa-edit'></i>
      </div>
    </div>
  );
};

export default TodoItem;
