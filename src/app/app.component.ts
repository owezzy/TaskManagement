import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, Task, User} from './model';
import {ProjectService} from './project/project.service';
import {UserService} from './user/user.service';
import {TaskService} from './tasks/task.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  openTaskCount: Observable<number>;
  user: Observable<User>;
  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    userService: UserService,
    taskListService: TaskService) {
    this.openTaskCount = taskListService.getTasks()
      .pipe(
        map((tasks: Task[]) => {
          return tasks
            .filter((task) => !task.done)
            .length;
        })
      );
    this.projects = projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
    this.user = userService.getCurrentUser();
  }

  selectProject(id: number) {
    this.projectService.selectProject(id);
  }
}
