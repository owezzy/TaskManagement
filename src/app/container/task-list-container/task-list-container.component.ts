import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Project, Task, TaskListFilterType} from '../../model';
import {TaskService} from '../../tasks/task.service';
import {map, switchMap, take} from 'rxjs/operators';
import {ProjectService} from '../../project/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListContainerComponent {
  selectedProject: Observable<Project>;
  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService,
              private projectService: ProjectService,
              private route: ActivatedRoute) {
    this.selectedProject = combineLatest(
      this.projectService.getProjects(),
      route.parent.params
    ).pipe(
      map(([projects, routeParams]) =>
        projects.find((project) => project.id === +routeParams.projectId))
    );

    this.tasks = this.selectedProject.pipe(
      switchMap((project) => this.taskService.getProjectTasks(project.id))
    );

    this.filteredTasks = combineLatest(this.tasks, this.activeTaskFilterType)
      .pipe(
        map(([tasks, activeTaskFilterType]) => {
          return tasks.filter((task: Task) => {
            if (activeTaskFilterType === 'all') {
              return true;
            } else if (activeTaskFilterType === 'open') {
              return !task.done;
            } else {
              return task.done;
            }
          });
        })
      );
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType.next(type);
  }

  // note take operator
  addTask(title: string) {
    this.selectedProject
      .pipe(
        take(1)
      ).subscribe((project) => {
      const task: Task = {
        projectId: project.id,
        title,
        done: false
      };
      this.taskService.addTask(task);
    });

  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }

}




