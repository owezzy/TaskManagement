import {Pipe, PipeTransform} from '@angular/core';
import {TagsService} from '../tags/tags.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'tags',
  pure: false
})
export class TagsPipe implements PipeTransform {

  constructor(
    private tagService: TagsService,
    private sanitizer: DomSanitizer
  ) { }

  transform(value) {
    if (typeof value !== 'string') {
      return value;
    }
    return this.tagService.parse(value)
      .pipe(
        map(parsed => this.sanitizer.bypassSecurityTrustHtml(parsed)))
  }

}
