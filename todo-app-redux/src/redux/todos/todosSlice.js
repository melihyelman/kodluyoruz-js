import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const res = await axios(`${process.env.REACT_APP_BASE_ENDPOINT}/todos`);
    return res.data;
  }
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/todos`,
      data
    );
    return res.data;
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    addNewTodoLoading: false,
    addNewTodoError: null,
    activeFilter: 'all',
  },
  reducers: {
    toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state, action) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
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
      state.addNewTodoLoading = false;
      state.items.push(action.payload);
    },
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodoLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodoLoading = false;
      state.addNewTodoError = action.error.message;
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
