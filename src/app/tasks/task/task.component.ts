import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }
}
