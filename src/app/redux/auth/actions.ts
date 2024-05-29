import { createAction, props } from '@ngrx/store';
import { User } from '../../models';

export const login = createAction(
  '[Login View] Login',
  props<{ user: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login View] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction('[Login View] Login Failure');

export const logout = createAction('[Tasks View] Logout');

export const logoutSuccess = createAction('[Tasks View] Logout Success');