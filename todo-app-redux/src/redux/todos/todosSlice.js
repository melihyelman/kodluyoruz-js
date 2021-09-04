import { createSlice } from '@reduxjs/toolkit';
import {
  getTodosAsync,
  addTodoAsync,
  toggleTodoAsync,
  deleteTodoAsync,
  clearCompletedAsync,
} from './services';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem('activeFilter') || 'all',
    addNewTodo: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // add todo
    [addTodoAsync.fulfilled]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.items.push(action.payload);
    },
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodo.isLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    },
    // toggle todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    // delete todo
    [deleteTodoAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    // clear completed
    [clearCompletedAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === 'all') {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === 'active'
      ? todo.completed === false
      : todo.completed === true
  );
};

export const { toggle, deleteTodo, changeFilter, clearCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
