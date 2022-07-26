export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
