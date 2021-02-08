import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, take} from 'rxjs/operators';

import {Project, Task, TaskListFilterType} from '../../model';
import {TaskService} from '../../tasks/task.service';
import {ProjectService} from '../../project/project.service';
import {ActivitiesService} from '../../activities/activites.service';
import {limitWithEllipsis} from '../../utilities/string-utilities';


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

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private activitiesService: ActivitiesService) {
    this.selectedProject = combineLatest(
      this.projectService.getProjects(),
      route.parent.params
    ).pipe(
      map(([projects, routeParams]) =>
        projects.find((project) => project.id === +routeParams.projectId))
    );

    this.tasks = this.selectedProject.pipe(
      switchMap((project) => this.taskService.getProjectTasks(project.id)),
      map(tasks => tasks.sort((a: Task, b: Task) => b.order - a.order))
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
    combineLatest(this.selectedProject, this.tasks)
      .pipe(
        take(1)
      ).subscribe(([project, tasks]) => {
      const position = tasks.reduce(
        (max, t: Task) => t.order > max ? t.order : max, 0
      );
      const task: Task = {
        projectId: project.id,
        title,
        done: false,
        order: position,
        created: +new Date()
      };
      this.taskService.addTask(task);
      this.activitiesService.logProjectActivity(
        project.id,
        'tasks',
        'Task Added',
        `A new task "${limitWithEllipsis(title, 30)}" was added to #project-${project.id}`
      );
    });

  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }

  showDetails(task: Task) {
    this.selectedProject.pipe(take(1))
      .subscribe(selectedProject => {
        this.router.navigate(['/projects', selectedProject.id, 'tasks', task.id]);
      });
  }
}




