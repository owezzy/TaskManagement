import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation} from '@angular/core';
import {Task} from 'src/app/model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TaskComponent {
  @Input() task: Task;
  @Output() outUpdateTask = new EventEmitter<Task>();
  @Output() outShowDetails = new EventEmitter();
  @Output() outDeleteTask = new EventEmitter();

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }

  updateTask(done: boolean) {
    this.outUpdateTask.emit({
      ...this.task,
      done,
      completed: done ? +new Date() : this.task.completed
    });
  }

  updateTitle(title: string) {
    this.outUpdateTask.emit({
      ...this.task,
      title
    });
  }

  deleteTask() {
    this.outDeleteTask.emit(this.task);
  }

  showDetails() {
    this.outShowDetails.emit(this.task);
  }
}
