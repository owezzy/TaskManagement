import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  Input,
  Output,
  ViewChild, ElementRef, HostBinding, EventEmitter, SimpleChanges, HostListener
} from '@angular/core';
import {TagsInputDirective} from '../../tags/tags-input.directive';
import {Tag, TagSelection} from '../../model';
import {splice} from '../../utilities/string-utilities';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnChanges, AfterViewInit {

  @ViewChild('editableContentElement', {static: false}) editableContentElement: ElementRef;
  @ViewChild('editableContentElement', {read: TagsInputDirective, static: true}) tagsInput: TagsInputDirective;

  @HostBinding('class.edit-mode') editMode = false;

  @Input() content: string;
  @Input() showControls: boolean;
  @Input() tags: Tag[];

  @Output() outSaveEdit = new EventEmitter<string>();
  @Output() outCancelEdit = new EventEmitter<never>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.content && this.editableContentElement) {
      this.setEditableContent(this.content);
    }
  }

  ngAfterViewInit() {
    this.setEditableContent(this.content);
  }

  @HostListener('click')
  focusEditableContent() {
    if (this.editMode) {
      this.editableContentElement.nativeElement.focus();
    }
  }

  saveEdit() {
    this.editMode = false;
    this.tagsInput.reset();
    this.outSaveEdit.emit(this.getEditableContent());
  }

  cancelEdit() {
    this.editMode = false;
    this.tagsInput.reset();
    this.setEditableContent(this.content);
    this.outCancelEdit.emit();
  }

  beginEdit() {
    this.editMode = true;
  }

  private getEditableContent() {
    return this.editableContentElement.nativeElement.textContent;
  }

  private setEditableContent(content: string) {
    this.editableContentElement.nativeElement.textContent = content;
  }

  selectTag(tagSelection: TagSelection) {
    this.setEditableContent(
      splice(
        this.getEditableContent(),
        tagSelection.hashTagInput.position.caretOffset,
        tagSelection.hashTagInput.hashTag.length,
        tagSelection.tag.hashTag
      ));
    this.tagsInput.reset();
  }
}
