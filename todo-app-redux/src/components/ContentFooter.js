import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectTodos } from '../redux/todos/todosSlice';
import { clearCompletedAsync } from '../redux/todos/services';

function ContentFooter() {
  const items = useSelector(selectTodos);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  useEffect(() => {
    localStorage.setItem('activeFilter', activeFilter);
  }, [activeFilter]);

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
        onClick={() => dispatch(clearCompletedAsync())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
