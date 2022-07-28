import { User } from '~/features/auth';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignupResponse extends LoginResponse {}
