import React from 'react';
import {
  toggle,
  deleteTodo,
  selectFilteredTodos,
} from '../redux/todos/todosSlice';

import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  const dispatch = useDispatch();

  const filteredTodos = useSelector(selectFilteredTodos);

  const handleDelete = (id) => {
    if (window.confirm('Are you yes?')) {
      dispatch(deleteTodo(id));
    }
  };

  return (
    <ul className='todo-list'>
      {filteredTodos.map((item) => (
        <li className={item.completed ? 'completed' : ''} key={item.id}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              checked={item.completed}
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.title}</label>
            <button
              className='destroy'
              onClick={() => handleDelete(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
