import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
  },
  reducers: {},
});

export const selectNotes = (state) => state.notes.items;

export default todosSlice.reducer;
