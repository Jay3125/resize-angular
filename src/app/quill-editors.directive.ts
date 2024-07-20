import { Directive, ElementRef } from '@angular/core';
import Quill from 'quill';
import { CustomBlot } from './custom-blot';


@Directive({
  selector: '[appQuillEditors]',
  standalone: true
})


export class QuillEditorsDirective {

  private quill!: Quill;

  // constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    // this.quill = new Quill(this.elementRef.nativeElement, {
    //   theme: 'now',
    //   modules: {
    //     toolbar: [
    //       ['bold', 'italic', 'underline'],
    //       ['blockquote', 'code-block'],
    //     ]
    //   }
    // });

    // Quill.register(CustomBlot);

  }

}
