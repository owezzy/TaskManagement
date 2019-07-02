import {EventEmitter, ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation} from '@angular/core';
import {parseDuration} from '../../utilities/time-utilities';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent {

  @Input() duration: number;
  @Output() outDurationChange = new EventEmitter<number>();

  editSaved(formattedDuration: string) {
    this.outDurationChange.emit(parseDuration(formattedDuration));
  }

}
