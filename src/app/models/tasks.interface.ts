export interface Task {
  id: string;
  title: string;
  isFinished: boolean;
}

export interface Log {
  userId: string;
  tasks: Task[];
}

export interface TasksState {
  logs: Log[];
}
