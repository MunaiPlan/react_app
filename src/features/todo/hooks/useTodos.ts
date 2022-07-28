import { useMemo } from 'react';

import todoApi from '~/api/todo/api';

import { AggregatedTodos } from '../types';

export const useTodos = () => {
  const {
    data, isLoading, error, isError,
  } = todoApi.endpoints.getTodos.useQuery(null);

  const aggregatedTodos = useMemo(() => {
    const todos = data?.data || [];

    return todos.reduce(
      (aggregated, todo) => {
        aggregated[todo.completed ? 'completed' : 'todo'].push(todo);
        return aggregated;
      },
      {
        completed: [],
        todo: [],
      } as AggregatedTodos,
    );
  }, [data]);

  return {
    todos: aggregatedTodos, isLoading, error, isError,
  };
};
