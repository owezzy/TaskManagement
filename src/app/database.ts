import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Project, Task, User} from './model';


export class Database implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      {id: 1, name: 'owen', pictureUrl: '/assets/user.svg'}
    ];

    const projects: Project[] = [
      {id: 1, title: 'First Project', description: 'Project Uno', comments: []},
      {id: 2, title: 'Second Project', description: 'Project Duex', comments: []},
    ];

    const tasks: Task[] = [
      {id: 1, projectId: 1, title: 'Task 1', done: false},
      {id: 2, projectId: 2, title: 'Task 2', done: true},
      {id: 3, projectId: 1, title: 'Task 3', done: false},
      {id: 4, projectId: 2, title: 'Task 4', done: true}
    ];
    return {users, projects, tasks};
  }
}
