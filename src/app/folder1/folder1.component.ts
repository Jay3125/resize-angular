import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ResizableDirective } from '../resizable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-folder1',
  templateUrl: './folder1.component.html',
  styleUrls: ['./folder1.component.css'],
  standalone: true,
  imports: [
    DragDropModule,
    CdkDropList,
    CommonModule,
    ResizableDirective,
    FormsModule,
    ReactiveFormsModule,
    QuillEditorComponent,
  ],
})
export class Folder1Component {
  @ViewChild('quillEditor') quillEditor!: QuillEditorComponent;

  constructor(private elementRef: ElementRef) {}

  title1 = 'here is record one show';
  title2 = 'here is record two show';

  myArr1 = ['Go to work', 'Play Cricket', 'Go home', 'take a nap', 'Walk dog'];
  myArr2 = ['Get up', 'Brush teeth', 'Take a tea', 'Check e-mail'];

  editorContent: string = '';
  showEditor = false;

  editorTop: any = 0;
  editorLeft: any = 0;
  selectedItem: any;
  selectedIndex!: number;
  selectedArray!: any[];

  key = '';

  // onDrop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    event.container.data.forEach((item, index) => {
      event.container.data[index] =
        this.quillEditor.quillEditor.root.innerText.trim();
    });
  }

  // saveEditorContent() {
  //   this.showEditor = false;
  //   this.selectedArray[this.selectedIndex] = this.quillEditor.quillEditor
  //     .getText()
  //     .trim();

  //   this.showEditor = false;
  // }
  saveEditorContent() {
    this.showEditor = false;
    this.selectedArray[this.selectedIndex] =
      this.quillEditor.quillEditor.root.innerText.trim();

    this.showEditor = false;
  }

  openEditor(item: any, i: any, arr: any) {
    if (!this.showEditor) {
      this.showEditor = true;
      this.editorContent = item;
      this.selectedItem = item;
      this.editorContent = item;
      this.selectedIndex = i;
      this.selectedArray = arr;
      const rect = this.elementRef.nativeElement
        .querySelector(`.drop-item:nth-child(${i + 1})`)
        .getBoundingClientRect();
      this.editorTop = rect.top + 'px';
      this.editorLeft = rect.left + 'px';
    }
  }

  cancelEditor() {
    this.showEditor = false;
    console.log('cancle:', this.selectedItem);
    console.log(this.showEditor);
  }
}
