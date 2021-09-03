import React from 'react';
import { toggle, deleteTodo } from '../redux/todos/todosSlice';

import { useSelector, useDispatch } from 'react-redux';

let filtered;

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you yes?')) {
      dispatch(deleteTodo(id));
    }
  };

  filtered = items;
  if (activeFilter !== 'all') {
    filtered = items.filter((todo) =>
      activeFilter === 'active'
        ? todo.completed === false && todo
        : todo.completed === true && todo
    );
  }

  return (
    <ul className='todo-list'>
      {filtered.map((item) => (
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
