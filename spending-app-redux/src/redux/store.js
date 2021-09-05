import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './itemsSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
