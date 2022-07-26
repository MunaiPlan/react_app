import React from 'react';

import { List } from '@mui/material';

import type { Todo } from '../../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props) {
  return (
    <List>
      {todos.map((todo) => (
        // eslint-disable-next-line no-underscore-dangle
        <TodoItem key={`todo-item-${todo._id}`} todo={todo} />
      ))}
    </List>
  );
}
