import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Message from './Alerts/Message';

import { addTodo } from './redux/actions/TodoActions';
import { setTodoAlert } from './redux/actions/AlertAction';

const TodoContainer = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    todoNotes: '',
    todoType: '',
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (data.todoNotes === '' || data.todoType === '') {
      dispatch(
        setTodoAlert('field cannot be null', 'danger')
      );
    }
    dispatch(
      addTodo({
        ...data,
        id: uuidv4(),
      })
    );
  };

  const { todos } = useSelector((state) => state.todos);
  const { alerts } = useSelector((state) => state.alerts);

  const { todoNotes, todoType } = data;

  return (
    <div className='container'>
      <div className='header'>
        {alerts &&
          alerts.map((alert) => (
            <Message variant={alert.type} key={alert.id}>
              {alert.msg}
            </Message>
          ))}
        <h1>Todo App</h1>
      </div>
      <form className='todoForm' onSubmit={onSubmit}>
        <input
          type='text'
          name='todoNotes'
          id='todoNotes'
          value={todoNotes}
          onChange={onChange}
          className='todoNotes'
        />
        <select
          name='todoType'
          value={todoType}
          className='todoType'
          onChange={onChange}
        >
          <option value='Finish up Chatapp'>
            Finish up Chatapp
          </option>
          <option value='Apply to Oracle'>
            Apply to Oracle
          </option>
          <option value='Buy stock options'>
            Buy stock options
          </option>
        </select>
        <input
          type='submit'
          value='Add Todo'
          className='submitBTN'
        />
      </form>
      {todos &&
        todos.map((todo, idx) => (
          <TodoItem todo={todo} key={idx} />
        ))}
    </div>
  );
};

export default TodoContainer;
