import {Pipe, PipeTransform} from '@angular/core';
import {TimeEfforts} from '../model';
import {formatDuration} from '../utilities/time-utilities';

@Pipe({
  name: 'formatEfforts'
})
export class FormatEffortPipe implements PipeTransform {

  transform(value: TimeEfforts) {
    if (value == null || typeof value !== 'object') {
      return value;
    }

    return `${formatDuration(value.effective) || 'none'} of ${formatDuration(value.estimated) || 'not estimated'}`;
  }
}
