import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import {CommentUpdate, Comment, User} from '../../../model';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {

  @Input() user: User;
  @Input() comments: Comment[];
  @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
  @Output() outCreateComment = new EventEmitter<Comment>();
  @ViewChild('commentContentEditable', { static: false }) commentContentEditable: ElementRef;

  createComment() {
    this.outCreateComment.emit({
      user: this.user,
      time: +new Date(),
      content: this.commentContentEditable.nativeElement.textContent
    });
    this.commentContentEditable.nativeElement.textContent = '';
  }

  updateComment(index: number, comment: Comment) {
    this.outUpdateComment.next({
      index,
      comment
    });
  }

}
