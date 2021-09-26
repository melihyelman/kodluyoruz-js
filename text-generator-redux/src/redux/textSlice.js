import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchText = createAsyncThunk(
  'text/getText',
  async ({ paras, format }) => {
    console.log(paras, format);
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`
    );
    return res.data;
  }
);

export const textSlice = createSlice({
  name: 'text',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchText.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchText.fulfilled]: (state, action) => {
      state.items = [action.payload];
      state.status = 'succeeded';
    },
  },
});

export default textSlice.reducer;
