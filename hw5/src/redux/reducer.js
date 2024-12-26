import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsersPending = createAction('users/fetchUsersPending');
export const fetchUsersFulfilled = createAction('users/fetchUsersFulfilled');
export const fetchUsersRejected = createAction('users/fetchUsersRejected');

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersPending()); 
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(fetchUsersFulfilled(response.data)); 
  } catch (error) {
    dispatch(fetchUsersRejected(error.message)); 
  }
};

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersPending, (state) => {
      state.loading = true; 
    })
    .addCase(fetchUsersFulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload; 
    })
    .addCase(fetchUsersRejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    });
});

export default usersReducer;
