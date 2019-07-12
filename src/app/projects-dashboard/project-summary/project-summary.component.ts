import {Component, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, Input, SimpleChanges} from '@angular/core';
import {ProjectSummary, TimeEfforts} from '../../model';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectSummaryComponent implements OnChanges {
  @Input() projectSummary: ProjectSummary;

  totalEfforts: TimeEfforts;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.projectSummary && this.projectSummary) {
      this.totalEfforts = this.projectSummary.tasks.reduce((totalEfforts, task) => {
        if (task.efforts) {
          totalEfforts.estimated += task.efforts.estimated || 0;
          totalEfforts.effective += task.efforts.effective || 0;
        }
        return totalEfforts;
      }, {
        estimated: 0,
        effective: 0
      });
    }
  }
}
