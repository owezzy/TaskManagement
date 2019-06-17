import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'calenderTime'
})
export class CalenderTimePipe implements PipeTransform {

  transform(value: any) {
    return moment(value).calendar();
  }

}
