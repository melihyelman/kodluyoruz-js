import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contacts
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    deleteContact: contactAdapter.removeOne,
    removeAllContact: contactAdapter.removeAll,
    updateContact: contactAdapter.updateOne,
  },
});

export const { addContact, removeAllContact, deleteContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducer;
