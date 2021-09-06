import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contectAdapter = createEntityAdapter();
const initialState = contectAdapter.getInitialState();

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: { addContact: contectAdapter.addOne },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
