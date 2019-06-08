import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {Project} from '../../model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input() project: Project;
}
