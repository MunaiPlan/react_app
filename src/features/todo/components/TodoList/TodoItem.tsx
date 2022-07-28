import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox/Checkbox';

import todoApi from '~/api/todo/api';

import { Todo } from '../../types';

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  const [deleteTodo, { isLoading: deleteInProgress }] = todoApi.endpoints.deleteTodo.useMutation();
  const [updateTodo, { isLoading }] = todoApi.endpoints.updateTodo.useMutation();

  const { description, completed, _id: id } = todo;

  return (
    <ListItem>
      {description}
      <ListItemSecondaryAction>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Checkbox
            onChange={() => updateTodo({ completed: !completed, _id: id })}
            checked={completed}
            disabled={isLoading}
          />
          <IconButton
            disabled={deleteInProgress}
            onClick={() => deleteTodo(id)}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
