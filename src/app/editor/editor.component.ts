import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillConfig, QuillEditorComponent, QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { QuillComponent } from 'ngx-quill';
// import Table from 'quill-table'
// Quill.register('modules/table', Table);

import Block from 'quill/blots/block';
import Container from 'quill/blots/container';

// const Block = Quill.import('blots/block');
// const Container = Quill.import('blots/container');

// const Quill = require('quill');

// Define table cell blot
class TableCellBlot extends Block {
  static override blotName: string;
  static override tagName: string;
}
TableCellBlot.blotName = 'tablecell';
TableCellBlot.tagName = 'td';
// Quill.register(TableCellBlot);

// Define table row blot
class TableRowBlot extends Container {
  static override blotName: string;
  static override tagName: string;
}
TableRowBlot.blotName = 'tablerow';
TableRowBlot.tagName = 'tr';
// Quill.register(TableRowBlot);

// Define table blot
class TableBlot extends Container {
  static override blotName: string;
  static override tagName: string;
}
TableBlot.blotName = 'table';
TableBlot.tagName = 'table';
// Quill.register(TableBlot);

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule, QuillModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent implements AfterViewInit {
  quillEditor: any;
  sanitizedHtml: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) {}
  editorModules = {
    table: {
      headerRow: false,
      handler: function () {},
    },
  };

  @ViewChild('editor') editor!: QuillEditorComponent;

  editorContent: string = '';

  quillConfig: any = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        // [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'], // remove formatting button
        [{ table: true }], // table button
      ],
    },
    table: {
      headerRow: true,
      handler: function () {
        // (this as unknown as EditorComponent).insertTable(3, 3);
      },
      toolbar: [['table']],
    },
    clipboard: {
      matchVisual: true,
    },
  };

  ngAfterViewInit() {
    // Access Quill instance after view is initialized
    const quill: Quill = this.editor.quillEditor;
    if (quill) {
      // Additional customization or event handling can be done here
      console.log('Quill instance:', quill);
    }
  }
  // onContentChanged(event: any) {
  //   console.log('Content changed:', event);
  //   // You can access the Quill instance using this.editor.quill
  //   console.log('Quill instance:', this.editor.beforeRender);
  // }
  onContentChanged(event: any) {
    console.log('Content changed:', event);
    event.innerText
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(event.html);
  }
}
