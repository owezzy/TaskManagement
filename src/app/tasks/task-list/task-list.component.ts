import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Task, TaskListFilterType} from '../../model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Input() tasks: Task[];
  @Output() outAddTask = new EventEmitter<string>();
  @Output() outActiveFilterType = new EventEmitter<TaskListFilterType>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  addTask(title: string) {
    this.outAddTask.emit(title);
  }

  activateFilterType(type: TaskListFilterType) {
    this.outActiveFilterType.emit(type);
  }

  updateTask(task: Task) {
    this.outUpdateTask.emit(task);
  }

  dropTask(target: Task, source: Task) {
    if (target.id === source.id) {
      return;
    }

    this.outUpdateTask.emit({
      ...target,
      order: source.order
    });
    this.outUpdateTask.emit({
      ...source,
      order: target.order
    });
  }
}
