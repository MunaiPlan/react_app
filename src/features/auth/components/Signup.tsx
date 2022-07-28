import React, { useState } from 'react';

import {
  Box, Button, Container, Input,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import authApi from '~/api/auth/api';
import { SignupRequest } from '~/api/auth/types';

export function Signup() {
  const navigate = useNavigate();
  const [signup] = authApi.endpoints.signup.useMutation();
  const [credentials, setCredentials] = useState<SignupRequest>({
    email: '',
    password: '',
    name: '',
  });

  const handleSuccess = () => {
    toast.success('Signed Up successfully');
    navigate('/');
  };

  const handleSignup = () => signup(credentials)
    .unwrap()
    .then(handleSuccess)
    .catch((err) => toast.error(err.data));

  return (
    <Container maxWidth={false}>
      <Box flexDirection="column" display="flex" maxWidth={400}>
        <Input
          placeholder="Name"
          title="Name"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, name: value })}
        />
        <Input
          placeholder="Email"
          title="Email"
          type="email"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, email: value })}
        />
        <Input
          placeholder="password"
          title="password"
          type="password"
          onChange={({ target: { value } }) => setCredentials({ ...credentials, password: value })}
        />
        <Button onClick={handleSignup}>Signup</Button>
      </Box>
    </Container>
  );
}
