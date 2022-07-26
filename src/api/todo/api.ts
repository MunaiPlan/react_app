import { createApi } from '@reduxjs/toolkit/query/react';
import { findIndex } from 'lodash';

import { baseQuery } from '..';
import {
  TodoCreateRequest,
  TodoCreateResponse,
  TodoDeleteResponse,
  TodoListResponse,
  TodoUpdateRequest,
  TodoUpdateResponse,
} from './types';

export const TODO_API_REDUCER_KEY = 'todoApi';

const todoApi = createApi({
  reducerPath: TODO_API_REDUCER_KEY,
  baseQuery,
  tagTypes: ['TODO_LIST'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoListResponse, null>({
      query: () => ({
        url: '/task',
        method: 'GET',
      }),
      providesTags: () => [
        {
          type: 'TODO_LIST',
        },
      ],
    }),
    createTodo: builder.mutation<TodoCreateResponse, TodoCreateRequest>({
      query: (data) => ({
        url: '/task',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => [{ type: 'TODO_LIST' }],
    }),
    updateTodo: builder.mutation<TodoUpdateResponse, TodoUpdateRequest>({
      query: ({ _id, ...data }) => ({
        url: `/task/${_id}`,
        method: 'PUT',
        body: data,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todoApi.util.updateQueryData('getTodos', null, (todoData) => {
            const todoIndex = findIndex(todoData.data, ['_id', _id]);
            if (todoIndex !== -1) { Object.assign(todoData.data[todoIndex], patch); }
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteTodo: builder.mutation<TodoDeleteResponse, string>({
      query: (_id) => ({
        url: `/task/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'TODO_LIST' }],
    }),
  }),
});

export default todoApi;
