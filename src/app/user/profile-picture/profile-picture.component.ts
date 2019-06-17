import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../../../model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnChanges {
  @Input() user: User;
  pictureSafeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.pictureSafeUrl = this.sanitizer
        .bypassSecurityTrustResourceUrl(this.user.pictureUrl);
    }
  }
}
