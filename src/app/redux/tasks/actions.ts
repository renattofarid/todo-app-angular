import { createAction, props } from '@ngrx/store';
import { Task } from '../../models';

export const loadTasks = createAction(
  '[Tasks] Load Tasks',
  props<{ userId: string }>()
);

export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction('[Tasks] Load Tasks Failure');

export const initializeTasks = createAction(
  '[Tasks] Initialize Tasks',
  props<{ userId: string }>()
);

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Task; userId: string }>()
);

export const removeTask = createAction(
  '[Tasks] Remove Task',
  props<{ taskId: string }>()
);

export const toggleTask = createAction(
  '[Tasks] Toggle Task',
  props<{ taskId: string }>()
);

export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: Task; userId: string }>()
);

export const clearTasks = createAction(
  '[Tasks] Clear Tasks',
  props<{ userId: string }>()
);
