import {Directive, HostListener} from '@angular/core';
import {HashTagInput} from '../model';
import {BehaviorSubject} from 'rxjs';
import {getRangeBoundingClientRect} from '../utilities/dom-utilities';

@Directive({
  selector: '[appTagsInput]'
})
export class TagsInputDirective {

  private hashTagInput: HashTagInput | null = null;
  private hashTagsSubject = new BehaviorSubject<HashTagInput>(this.hashTagInput);
  hashTagChange = this.hashTagsSubject.asObservable();

  reset() {
    this.hashTagInput = null;
    this.hashTagsSubject.next(this.hashTagInput);
  }

  private updateHashTag(hashTag, position = this.hashTagInput.position) {
    this.hashTagInput = {hashTag, position};
    this.hashTagsSubject.next(this.hashTagInput);
  }


  @HostListener('keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (this.hashTagInput && event.which === 8) {
      this.updateHashTag(this.hashTagInput.hashTag.slice(0, -1));
    }
  }

  @HostListener('keypress', ['$event'])
  keyPress(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which);
    if (char === '#') {
      this.updateHashTag('#', getRangeBoundingClientRect());
    } else if (!/[\w-]/i.test(char)) {
      this.reset();
    } else if (this.hashTagInput) {
      this.updateHashTag(this.hashTagInput.hashTag + char);
    }
  }
}
