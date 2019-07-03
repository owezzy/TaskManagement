import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TimeEfforts} from '../../model';

@Component({
  selector: 'app-efforts-timeline',
  templateUrl: './efforts-timeline.component.html',
  styleUrls: ['./efforts-timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class EffortsTimelineComponent implements OnChanges {
  @Input() efforts: TimeEfforts;

  done: number;
  overtime: number;

  ngOnChanges(changes: SimpleChanges) {
    this.done = 0;
    this.overtime = 0;

    if (
      !this.efforts.estimated && this.efforts.effective ||
      (this.efforts.estimated && this.efforts.estimated === this.efforts.effective)
    ) {
      this.done = 100;
    } else if (this.efforts.estimated < this.efforts.effective) {
      this.done = this.efforts.estimated / this.efforts.effective * 100;
      this.overtime = 100 - this.done;
    } else {
      this.done = this.efforts.effective / this.efforts.estimated * 100;
    }
  }
}
