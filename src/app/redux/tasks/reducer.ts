import { createReducer, on } from '@ngrx/store';
import * as TasksActions from './actions';
import { Log, TasksState } from '../../models';

export const tasksInitialState: TasksState = {
  logs: [],
};

export const tasksReducer = createReducer(
  tasksInitialState,

  on(TasksActions.initializeTasks, (state, { userId }) => {
    const tasks = localStorage.getItem('tasks');

    if (!tasks) {
      localStorage.setItem(
        'tasks',
        JSON.stringify({
          logs: [
            {
              userId,
              tasks: [],
            },
          ],
        })
      );
      return {
        ...state,
        logs: [
          ...state.logs,
          {
            userId,
            tasks: [],
          },
        ],
      };
    }

    if (JSON.parse(tasks).logs.find((log: Log) => log.userId === userId)) {
      return {
        ...state,
      };
    } else {
      const logs = JSON.parse(tasks).logs;
      logs.push({
        userId,
        tasks: [],
      });

      localStorage.setItem(
        'tasks',
        JSON.stringify({
          logs,
        })
      );
    }

    return {
      ...state,
    };
  }),

  on(TasksActions.loadTasks, (state, { userId }) => {
    const tasks = localStorage.getItem('tasks');

    if (!tasks) {
      return {
        ...state,
      };
    }

    const logsStorage = JSON.parse(tasks).logs;
    const logs: Log[] = logsStorage.map((log: Log) => {
      if (log.userId === userId) {
        return log;
      }
      return log;
    });

    return {
      ...state,
      logs,
    };
  }),

  on(TasksActions.addTask, (state, { task, userId }) => {
    const tasks = localStorage.getItem('tasks');
    console.log({ tasks });
    if (!tasks)
      return {
        ...state,
      };

    const logsStorage = JSON.parse(tasks).logs;
    const logs = [...logsStorage].map((log: Log) => {
      if (log.userId === userId) {
        log.tasks.push(task);
      }
      return log;
    });
    console.log({ newLogs: logs });

    localStorage.setItem(
      'tasks',
      JSON.stringify({
        logs,
      })
    );

    return {
      ...state,
      logs,
    };
  }),
  on(TasksActions.removeTask, (state, { taskId }) => {
    const logs = state.logs.map((log) => {
      return {
        ...log,
        tasks: log.tasks.filter((task) => task.id !== taskId),
      };
    });
    // Update localStorage
    localStorage.setItem(
      'tasks',
      JSON.stringify({
        logs,
      })
    );
    return {
      ...state,
      logs,
    };
  }),
  on(TasksActions.toggleTask, (state, { taskId }) => {
    const logs = state.logs.map((log) => {
      return {
        ...log,
        tasks: log.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              isFinished: !task.isFinished,
            };
          }
          return task;
        }),
      };
    });
    // Update localStorage
    localStorage.setItem(
      'tasks',
      JSON.stringify({
        logs,
      })
    );
    return {
      ...state,
      logs,
    };
  })
);
