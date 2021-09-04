import { useEffect } from 'react';
import {
  toggleTodoAsync,
  deleteTodoAsync,
  getTodosAsync,
} from '../redux/todos/services';
import { selectFilteredTodos } from '../redux/todos/todosSlice';

import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Error from './Error';

function TodoList() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  const filteredTodos = useSelector(selectFilteredTodos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you yes?')) {
      await dispatch(deleteTodoAsync(id));
    }
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  if (isLoading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <ul className='todo-list'>
      {filteredTodos.map((item) => (
        <li className={item.completed ? 'completed' : ''} key={item.id}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
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
