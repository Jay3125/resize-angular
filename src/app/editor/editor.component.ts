import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillConfig, QuillEditorComponent, QuillModule } from 'ngx-quill';
import Quill from 'quill';
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
  constructor() { }
  editorModules = {
    table: {
      headerRow: true,
      handler: function() {
        
      }
    }
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
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'], // remove formatting button
        // [{ table: true }], // table button
        ['table'],
        ['column-left', 'column-right'],
        ['row-above', 'row-below'],
        ['row-remove', 'column-remove']
        // ['table','column-left', 'column-right', 'row-above', 'row-below', 'row-remove', 'column-remove']
        
      ],
    },
    table: {
      headerRow: true,
      handler: function() {
        (this as unknown as EditorComponent).insertTable(3, 3);

      },
      toolbar: [
        ['table'],
        ['column-left', 'column-right'],
        ['row-above', 'row-below'],
        ['row-remove', 'column-remove']
      ]
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
  onContentChanged(event: any) {
    console.log('Content changed:', event);
    // You can access the Quill instance using this.editor.quill
    console.log('Quill instance:', this.editor.quillEditor);
  }

  // Table
  // insertTable() {
  //   this.quillEditor.table.insertTable(3, 3);
  // }

  // insertColumnLeft() {
  //   this.quillEditor.table.insertColumnLeft();
  // }

  // insertColumnRight() {
  //   this.quillEditor.table.insertColumnRight();
  // }
  // insertTable(rows: number, cols: number) {
  //   const tableHtml = this.createTableHtml(rows, cols);
  //   const quill = (document.querySelector('quill-editor') as any).quill;
  //   quill.clipboard.dangerouslyPasteHTML(tableHtml);
  // }
  // createTableHtml(rows: number, cols: number) {
  //   let tableHtml = '<table>';
  //   for (let i = 0; i < rows; i++) {
  //     tableHtml += '<tr>';
  //     for (let j = 0; j < cols; j++) {
  //       tableHtml += '<td></td>';
  //     }
  //     tableHtml += '</tr>';
  //   }
  //   tableHtml += '</table>';
  //   return tableHtml;
  // }
  insertTable(rows: number, cols: number) {
    const tableHtml = this.createTableHtml(rows, cols);
    const quill = this.editor.quillEditor;
    quill.clipboard.dangerouslyPasteHTML(tableHtml);
  }
  
  // insertColumnLeft() {
  //   const quill = this.editor.quillEditor;
  //   quill.table.insertColumnLeft();
  // }
  insertColumnLeft() {
    const table = this.quillEditor.getSelection().index;
    const tableHtml = '<td></td>';
    this.quillEditor.clipboard.dangerouslyPasteHTML(tableHtml, table);
  }
  
  // insertColumnRight() {
  //   const quill = this.editor.quillEditor;
  //   quill.table.insertColumnRight();
  // }
  insertColumnRight() {
    const selection = this.quillEditor.getSelection();
    const table = this.quillEditor.getContents(selection.index, 1).ops[0].insert;
    const tableRows = table.match(/<\/tr>/g).length;
    for (let i = 0; i < tableRows; i++) {
      const tableHtml = '<td></td>';
      this.quillEditor.clipboard.dangerouslyPasteHTML(tableHtml, selection.index + i);
    }
  }
  
  insertRowAbove() {
    const selection = this.quillEditor.getSelection();
    const table = this.quillEditor.getContents(selection.index, 1).ops[0].insert;
    const tableHtml = '<tr><td></td></tr>';
    this.quillEditor.clipboard.dangerouslyPasteHTML(tableHtml, selection.index);
  }

  insertRowBelow() {
    const selection = this.quillEditor.getSelection();
    const table = this.quillEditor.getContents(selection.index, 1).ops[0].insert;
    const tableHtml = '<tr><td></td></tr>';
    this.quillEditor.clipboard.dangerouslyPasteHTML(tableHtml, selection.index + table.length);
  }

  removeRow() {
    const selection = this.quillEditor.getSelection();
    const table = this.quillEditor.getContents(selection.index, 1).ops[0].insert;
    const tableRows = table.match(/<\/tr>/g);
    const rowIndex = tableRows.indexOf('</tr>' + selection.index);
    const rowHtml = '<tr>';
    this.quillEditor.clipboard.dangerouslyPasteHTML(rowHtml, selection.index - rowIndex);
  }

  removeColumn() {
    const selection = this.quillEditor.getSelection();
    const table = this.quillEditor.getContents(selection.index, 1).ops[0].insert;
    const tableCells = table.match(/<\/td>/g);
    const cellIndex = tableCells.indexOf('</td>' + selection.index);
    const cellHtml = '<td>';
    this.quillEditor.clipboard.dangerouslyPasteHTML(cellHtml, selection.index - cellIndex);
  }
  
  createTableHtml(rows: number, cols: number) {
    let tableHtml = '<table>';
    for (let i = 0; i < rows; i++) {
      tableHtml += '<tr>';
      for (let j = 0; j < cols; j++) {
        tableHtml += '<td></td>';
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    return tableHtml;
  }
}
