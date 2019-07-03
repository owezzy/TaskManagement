import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

import {TimeEfforts} from '../../model';
import {UNITS} from '../../utilities/time-utilities';

@Component({
  selector: 'app-efforts',
  templateUrl: './efforts.component.html',
  styleUrls: ['./efforts.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffortsComponent {

  @Input() efforts: TimeEfforts;
  @Output() outEffortsChange = new EventEmitter<TimeEfforts>();

  estimatedChange(estimated: number) {
    this.outEffortsChange.emit({
      ...this.efforts,
      estimated
    });
  }

  effectiveChange(effective: number) {
    this.outEffortsChange.emit({
      ...this.efforts,
      effective
    });
  }

  addEffectiveHours(hours: number) {
    const hourMilliseconds = UNITS.find((unit) => unit.short === 'h').milliseconds;
    let effective = this.efforts && this.efforts.effective ?
      this.efforts.effective : 0;
    effective += hours * hourMilliseconds;

    this.outEffortsChange.emit({
      ...this.efforts,
      effective
    });
  }

}
