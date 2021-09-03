import React from 'react';

import { useSelector } from 'react-redux';

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);

  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <li className={item.completed ? 'completed' : ''} key={item.id}>
          <div className='view'>
            <input className='toggle' type='checkbox' />
            <label>{item.title}</label>
            <button className='destroy'></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
