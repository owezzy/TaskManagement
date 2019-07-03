import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {Tag, Task, TimeEfforts} from '../../model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailsComponent {
  @Input() task: Task;
  @Input() tags: Tag[];
  @Output() outUpdateTask = new EventEmitter();

  updateTitle(title: string) {
    this.outUpdateTask.emit({
      ...this.task,
      title
    });
  }

  updateDescription(description: string) {
    this.outUpdateTask.emit({
      ...this.task,
      description
    });
  }

  updateEfforts(efforts: TimeEfforts) {
    this.outUpdateTask.emit({
      ...this.task,
      efforts
    });
  }
}
