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
  readonly comments: Comment[];
}

export interface Tab {
  readonly id: any;
  readonly title: string;
}
export interface User {
  readonly id?: number;
  readonly name: string;
  readonly pictureUrl: string;
}

export interface Comment {
  readonly time: number;
  readonly user: User;
  readonly content: string;
}

export interface CommentUpdate {
  readonly index: number;
  readonly comment: Comment;
}
