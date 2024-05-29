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
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    loading: false,
    error: true,
    user: null,
  }))
);
