import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {User} from '../../../model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAreaComponent {

  @Input() user: User;
  @Input() openTasksCount: number;

}
