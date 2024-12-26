import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducer';

const store = configureStore({
  reducer: {
    users: usersReducer, 
  },
});

export default store;
