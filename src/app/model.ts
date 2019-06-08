export interface Task {
  readonly id?: number;
  readonly projectId?: number;
  readonly title: string;
  readonly done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';


export interface Project {
  readonly id?: number;
  readonly title: string;
  readonly  description: string;
}

export interface Tab {
  readonly id: any;
  readonly title: string;
}
