import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import findIndex from 'lodash/findIndex';

import type { TodoState } from './types';

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    completeTodo(state, action: PayloadAction<string | undefined>) {
      const index = findIndex(
        state.todos,
        (todo) => todo.description === action.payload,
      );
      if (index !== -1) {
        state.todos[index].completed = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { completeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
