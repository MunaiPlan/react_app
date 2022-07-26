import React, { useState } from 'react';

import { Box, Button, Input } from '@mui/material';

import todoApi from '~/api/todo/api';

export function TodoForm() {
  const [createTodo, { isLoading }] = todoApi.endpoints.createTodo.useMutation();
  const [description, setDescription] = useState('');

  return (
    <Box>
      <Input
        placeholder="Read book"
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <Button disabled={isLoading} onClick={() => createTodo({ description })}>
        Create
      </Button>
    </Box>
  );
}
