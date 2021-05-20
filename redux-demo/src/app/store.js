import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter-with-toolkit/counter.js';
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
