import React from 'react';

import { Container, Typography } from '@mui/material';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

export function Todo() {
  const { todos, isLoading } = useTodos();

  if (isLoading) return <div> Loading... </div>;

  return (
    <Container>
      <TodoForm />
      <Typography variant="h5" fontWeight={700}>
        Completed Tasks
      </Typography>
      {todos.completed.length > 0 ? (
        <TodoList todos={todos.completed} />
      ) : (
        <div>No completed tasks</div>
      )}
      <Typography variant="h5" fontWeight={700}>
        Todo Tasks
      </Typography>
      {todos.todo.length > 0 ? <TodoList todos={todos.todo} /> : <div>No todo tasks</div>}
    </Container>
  );
}
