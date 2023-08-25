import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';

const store = configureStore({
  reducer: {
    employeeReducer,
  },
});

export default store;
