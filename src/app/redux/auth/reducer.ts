import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './actions';
import { AuthState } from '../../models';

export const initialState: AuthState = {
  loading: false,
  user: null,
  error: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => {
    // Save the user in local storage
    localStorage.setItem('user', JSON.stringify(user));
    return {
      ...state,
      user,
      loading: false,
    };
  }),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    loading: false,
    error: true,
    user: null,
  })),
  on(AuthActions.logout, (state) => {
    // Remove the user from local storage
    localStorage.removeItem('user');
    return {
      ...state,
      user: null,
    };
  })
);
