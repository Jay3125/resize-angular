import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class Folder1Component implements OnInit {
  ngOnInit(): void {}
  @ViewChild('quillEditor') quillEditors!: QuillEditorComponent;

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

  lists: any[] = [];

  countList: number = 0;

  createNewList() {
    const newList = {
      id: this.lists.length + 1,
      title: `Here Is Generated ${this.lists.length + 1} Show`,
      data: [...this.myArr1], //here copy myArr1 all values in this data using Spread_Operator
    };
    this.lists.push(newList); // copy data into the lists array
    this.countList++;
    console.log("New List is Creted :)");
    
  }
  removeNewList() {
    this.lists.pop();
    this.countList--;
    console.log('Delete Button Call :(');
  }

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
    event.container.data.forEach((index: any) => {
      event.container.data[index] =
        // this.quillEditors.quillEditor.root.innerText.trim();
        this.quillEditors.quillEditor.root.innerText;
    });
  }

  saveEditorContent() {
    this.showEditor = false;
    this.selectedArray[this.selectedIndex] =
      this.quillEditors.quillEditor.root.innerText.trim();

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
