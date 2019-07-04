import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Project, ProjectSummary} from '../../model';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDashboardComponent {

  @Input() projectSummaries: ProjectSummary[];
  @Output() outActivateProject = new EventEmitter<Project>();

  activateProject(project: Project) {
    this.outActivateProject.emit(project);
  }
}
