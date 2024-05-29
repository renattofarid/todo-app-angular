import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectTasksState = (state: AppState) => state.tasks;

export const selectTasksFromUser = (userId: string) =>
  createSelector(selectTasksState, (state) => state.logs.find((log) => log.userId === userId)?.tasks || []);
