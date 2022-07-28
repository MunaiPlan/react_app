import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authApi from '~/api/auth/api';

import type { AuthState } from './types';

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );
  },
});

export const { logout } = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'rtk:auth',
    storage,
    whitelist: ['token', 'isLoggedIn'],
  },
  authSlice.reducer,
);
