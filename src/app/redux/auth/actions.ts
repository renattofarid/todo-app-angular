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
