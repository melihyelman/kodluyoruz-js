import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle, deleteTodo } from '../redux/todos/todosSlice';

import { useSelector } from 'react-redux';

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you yes?')) {
      dispatch(deleteTodo(id));
    }
  };

  return (
    <ul className='todo-list'>
      {items.map((item) => (
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
