import { ActionReducerMap } from '@ngrx/store';
import { AuthState, TasksState } from '../models';
import { authReducer } from './auth/reducer';
import { tasksReducer } from './tasks/reducer';

export interface AppState {
  auth: AuthState;
  tasks: TasksState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  tasks: tasksReducer,
};
