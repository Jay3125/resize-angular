import { Directive, HostListener, Output } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { EventEmitter } from 'stream';
@Directive({
  selector: '[appDroppable]',
})
export class DroppableDirective {
  @HostListener('cdkDropListDropped', ['$event'])
  @Output()
  dropEvent = new EventEmitter<any>();
  drop(event: CdkDragDrop<string[], any>) {
    this.dropEvent.emit(event);
    console.log(event);
    
  }
}