import React, { useState } from 'react';

import {
  Box, Button, Container, Input,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import authApi from '~/api/auth/api';
import { LoginRequest } from '~/api/auth/types';

export function Login() {
  const navigate = useNavigate();
  const [login] = authApi.endpoints.login.useMutation();
  const [credentials, setCredentials] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  const handleSuccess = () => {
    toast.success('Logged in successfully');
    navigate('/');
  };

  const handleLogin = () => login(credentials)
    .unwrap().then(handleSuccess)
    .catch((err) => toast.error(err.data));

  return (
    <Container maxWidth={false}>
      <Box flexDirection="column" display="flex" maxWidth={400}>
        <Input
          placeholder="Email"
          title="Email"
          type="email"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, email: value })}
        />
        <Input
          placeholder="Password"
          title="password"
          type="password"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, password: value })}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
}
