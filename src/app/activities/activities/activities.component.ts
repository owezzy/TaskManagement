import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Activity, ActivitySliderSelection} from '../../model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent {

  @Input() activities: Activity[];
  @Input() selectedActivities: Activity[];
  @Output() outSelectionChange = new EventEmitter<ActivitySliderSelection>();

  selectionChange(selection: ActivitySliderSelection) {
    this.outSelectionChange.emit(selection);
  }

}
