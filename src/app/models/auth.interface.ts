export interface User {
  name: string;
  user: string;
  email: string;
  image: string;
  password: string;
}
export interface AuthState {
  loading: boolean;
  user: User | null;
  error: boolean;
}
