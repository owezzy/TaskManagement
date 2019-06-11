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
import {CommentUpdate, Comment, User, Tag, TagSelection} from '../../model';
import {TagsInputDirective} from '../../tags/tags-input.directive';
import {splice} from '../../utilities/string-utilities';


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
  @Input() tags: Tag[];
  @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
  @Output() outCreateComment = new EventEmitter<Comment>();
  @ViewChild('commentContentEditable', {static: false}) commentContentEditable: ElementRef;
  @ViewChild('commentContentEditable', {static: true, read: TagsInputDirective}) tagsInput: TagsInputDirective;

  selectTag(tagsSelection: TagSelection) {
    this.commentContentEditable.nativeElement.textContent = splice(
      this.commentContentEditable.nativeElement.textContent,
      tagsSelection.hashTagInput.position.caretOffset,
      tagsSelection.hashTagInput.hashTag.length,
      tagsSelection.tag.hashTag
    );
    this.tagsInput.reset();
  }

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
