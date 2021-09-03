import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  changeFilter,
  clearCompleted,
  selectTodos,
} from '../redux/todos/todosSlice';

function ContentFooter() {
  const items = useSelector(selectTodos);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const dispatch = useDispatch();

  const itemsLeft = items.filter((item) => !item.completed).length;

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft} </strong>
        item{itemsLeft > 1 && 's'} left
      </span>

      <ul className='filters'>
        <li>
          <a
            href='/#'
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => dispatch(changeFilter('all'))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href='/#'
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => dispatch(changeFilter('active'))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href='/#'
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => dispatch(changeFilter('completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className='clear-completed'
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
