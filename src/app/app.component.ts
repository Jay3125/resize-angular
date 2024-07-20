import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResizableDirective } from './resizable.directive';
import { NgStyle } from '@angular/common';

import { Folder1Component } from './folder1/folder1.component';

import { CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {  QuillEditorComponent, QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillEditorsDirective } from './quill-editors.directive';
import { EditorComponent } from "./editor/editor.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ResizableDirective,
    NgStyle,
    Folder1Component,
    DragDropModule,
    CdkDropList,
    QuillEditorComponent,
    QuillModule,
    ReactiveFormsModule,
    FormsModule,
    QuillEditorsDirective,
    EditorComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resize-angular';
  color = '';
  editorContent: string = '';

  quillEditor: any;

  // editorConfig = {
  //   toolbar: {
  //     container: [
  //       ['bold', 'italic', 'underline', 'strike'],
  //       [{ 'header': 1 }, { 'header': 2 }],
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //       ['link', 'image'],
  //       ['clean'], // remove formatting button
  //       ['table'] // add table button
  //     ],
  //     handlers: {
  //       'table': () => {
  //         // Get the Quill editor instance
  //         const quill = this.quillEditor.quill;

  //         const range = quill.getSelection();
  //         const table = prompt('Enter number of rows and columns (e.g. 3x3)');
  //         if (table) {
  //           const [rows, cols] = table.split('x').map(value => parseInt(value.trim(), 10));
  //           if (rows && cols) {
  //             const tableHtml = '<table>' + 
  //                               Array.from({ length: rows }, () => '<tr>' + 
  //                                 Array.from({ length: cols }, () => '<td><br></td>').join('') + 
  //                               '</tr>').join('') + 
  //                               '</table>';
  //             quill.clipboard.dangerouslyPasteHTML(range.index, tableHtml);
  //           }
  //         }
  //       }
  //     }
  //   }
  // };
  // editorConfig = {
  //   modules:{
      
  //     toolbar:  [
  //         ['bold', 'italic', 'underline', 'strike'],
  //         [{ 'header': 1 }, { 'header': 2 }],
  //         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //         ['link', 'image'],
  //         ['clean'], // remove formatting button
  //         {
  //           icon: '<i class="fas fa-table"></i>',
  //           tooltip: 'Insert Table',
  //           handler: () => {
  //             const tableSize = prompt('Enter number of rows and columns (e.g. 3x3)');
  //             if (tableSize) {
  //               const [rows, cols] = tableSize.split('x').map(value => parseInt(value.trim(), 10));
  //               if (rows && cols) {
  //                 const tableHtml = '<table>' + 
  //                                   Array.from({ length: rows }, () => '<tr>' + 
  //                                     Array.from({ length: cols }, () => '<td><br></td>').join('') + 
  //                                   '</tr>').join('') + 
  //                                   '</table>';
  //                 this.quillEditor.quill.clipboard.dangerouslyPasteHTML(this.quillEditor.quill.getSelection().index, tableHtml);
  //               }
  //             }
  //           }
  //         }
  //       ]
      
  //   }
  // };
  
  // editorConfig = {
  //   modules: {
  //     toolbar: [
  //       ['bold', 'italic', 'underline', 'strike'],
  //       [{ 'header': 1 }, { 'header': 2 }],
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //       ['link', 'image'],
  //       ['clean'], // remove formatting button
  //       {
  //         icon: '<i class="fas fa-table"></i>',
  //         tooltip: 'Insert Table',
  //         handler: () => {
  //           const table = this.quillEditor.quill.root.querySelector('table');
  //           if (table) {
  //             const action = prompt('Do you want to add a row or column? (row/column)');
  //             if (action === 'row') {
  //               const newRow = table.insertRow();
  //               const cols = table.rows[0].cells.length;
  //               Array.from({ length: cols }, () => newRow.insertCell());
  //             } else if (action === 'column') {
  //               const cols = table.rows.length;
  //               Array.from({ length: cols }, (index:number) => table.rows[index].insertCell());
  //             }
  //           } else {
  //             const tableSize = prompt('Enter number of rows and columns (e.g. 3x3)');
  //             if (tableSize) {
  //               const [rows, cols] = tableSize.split('x').map(value => parseInt(value.trim(), 10));
  //               if (rows && cols) {
  //                 const tableHtml = '<table>' + 
  //                                   Array.from({ length: rows }, () => '<tr>' + 
  //                                     Array.from({ length: cols }, () => '<td><br></td>').join('') + 
  //                                   '</tr>').join('') + 
  //                                   '</table>';
  //                 this.quillEditor.quill.clipboard.dangerouslyPasteHTML(this.quillEditor.quill.getSelection().index as any, tableHtml);
  //               }
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };


  // editorConfig = {
  //   modules: {
  //     toolbar: [
  //       ['bold', 'italic', 'underline', 'strike'],
  //       [{ 'header': 1 }, { 'header': 2 }],
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //       ['link', 'image'],
  //       ['clean'], // remove formatting button
  //       {
  //         icon: '<i class="fas fa-table"></i>',
  //         tooltip: 'Insert Table',
  //         handler: () => {
  //           const table = this.quillEditor.quill.root.querySelector('table');
  //           if (table) {
  //             const action = prompt('Do you want to add a row or column? (row/column)');
  //             if (action === 'row') {
  //               const newRow = table.insertRow();
  //               const cols = table.rows[0].cells.length;
  //               Array.from({ length: cols }, () => newRow.insertCell());
  //             } else if (action === 'column') {
  //               const rows = table.rows.length;
  //               Array.from(table.rows, (row:any) => row.insertCell());
  //             }
  //           } else {
  //             const tableSize = prompt('Enter number of rows and columns (e.g. 3x3)');
  //             if (tableSize) {
  //               const [rows, cols] = tableSize.split('x').map(value => parseInt(value.trim(), 10));
  //               if (rows && cols) {
  //                 const tableHtml = '<table>' + 
  //                                   Array.from({ length: rows }, () => '<tr>' + 
  //                                     Array.from({ length: cols }, () => '<td><br></td>').join('') + 
  //                                   '</tr>').join('') + 
  //                                   '</table>';
  //                 this.quillEditor.quill.clipboard.dangerouslyPasteHTML(this.quillEditor.quill.getSelection().index, tableHtml);
  //               }
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };

  
  // editorConfig = {
  //   modules: {
  //     toolbar: [
  //       ['bold', 'italic', 'underline', 'strike'],
  //       [{ 'header': 1 }, { 'header': 2 }],
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //       ['link', 'image'],
  //       ['clean'], // remove formatting button
  //       {
  //         icon: '<i class="fas fa-table"></i>',
  //         tooltip: 'Insert Table',
  //         handler: () => {
  //           const table = this.quillEditor.quill.root.querySelector('table');
  //           if (table) {
  //             // Existing table actions
  //             const action = prompt('Do you want to add a row, column, or delete a row/column? (row/column/delete)');
  //             if (action === 'row') {
  //               const newRow = table.insertRow(table.rows.length);
  //               const cols = table.rows[0].cells.length;
  //               for (let i = 0; i < cols; i++) {
  //                 newRow.insertCell(i);
  //               }
  //             } else if (action === 'column') {
  //               const rows = table.rows.length;
  //               for (let i = 0; i < rows; i++) {
  //                 table.rows[i].insertCell(table.rows[i].cells.length);
  //               }
  //             } else if (action === 'delete') {
  //               const deleteAction = prompt('Do you want to delete a row or column? (row/column)');
  //               if (deleteAction === 'row') {
  //                 const rowIndex = prompt('Enter the row index to delete (0-based)');
  //                 if (rowIndex) {
  //                   table.deleteRow(rowIndex);
  //                 }
  //               } else if (deleteAction === 'column') {
  //                 const colIndex = prompt('Enter the column index to delete (0-based)');
  //                 if (colIndex) {
  //                   for (let i = 0; i < table.rows.length; i++) {
  //                     table.rows[i].deleteCell(colIndex);
  //                   }
  //                 }
  //               }
  //             }
  //           } else {
  //             // Create a new table
  //             const tableSize = prompt('Enter number of rows and columns (e.g. 3x3)');
  //             if (tableSize) {
  //               const [rows, cols] = tableSize.split('x').map(value => parseInt(value.trim(), 10));
  //               if (rows && cols) {
  //                 let tableHtml = '<table>';
  //                 for (let i = 0; i < rows; i++) {
  //                   tableHtml += '<tr>';
  //                   for (let j = 0; j < cols; j++) {
  //                     tableHtml += '<td><br></td>';
  //                   }
  //                   tableHtml += '</tr>';
  //                 }
  //                 tableHtml += '</table>';
  //                 this.quillEditor.quill.clipboard.dangerouslyPasteHTML(this.quillEditor.quill.getSelection().index, tableHtml);
  //               }
  //             }
  //           }
  //         }
  //       }
  //     ],
  //   },
    
  // };
  editorConfig = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean'], // remove formatting button
        {
          icon: '<i class="fas fa-table"></i>',
          tooltip: 'Insert Table',
          handler: () => {
            const table = this.quillEditor.quill.root.querySelector('table');
            if (table) {
              // Existing table actions
              const action = prompt('Do you want to add a row, column, or delete a row/column? (row/column/delete)');
              if (action === 'row') {
                this.addRow(table,10);
              } else if (action === 'column') {
                this.addColumn(table);
              } else if (action === 'delete') {
                this.deleteRowOrColumn(table);
              }
            } else {
              // Create a new table
              this.createTable();
            }
          }
        }
      ],
    },
  };
  
  // Add row function
  onEditorCreated(editor: any) {
    editor.on('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        const table = editor.root.querySelector('table');
        if (table) {
          const cols = prompt('Enter the number of columns for the new row:');
          if (cols) {
            this.addRow(table, parseInt(cols, 10));
          }
          event.preventDefault();
        }
      }
    });
  }
  
  addRow(table: HTMLTableElement, cols: number) {
    const newRow = table.insertRow(table.rows.length);
    for (let i = 0; i < cols; i++) {
      newRow.insertCell(i);
    }
  }
  
  // Add column function
  addColumn(table:any) {
    const rows = table.rows.length;
    for (let i = 0; i < rows; i++) {
      table.rows[i].insertCell(table.rows[i].cells.length);
    }
  }
  
  // Delete row or column function
  deleteRowOrColumn(table:any) {
    const deleteAction = prompt('Do you want to delete a row or column? (row/column)');
    if (deleteAction === 'row') {
      const rowIndex = prompt('Enter the row index to delete (0-based)');
      if (rowIndex) {
        table.deleteRow(rowIndex);
      }
    } else if (deleteAction === 'column') {
      const colIndex = prompt('Enter the column index to delete (0-based)');
      if (colIndex) {
        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].deleteCell(colIndex);
        }
      }
    }
  }
  
  // Create a new table function
  createTable() {
    const tableSize = prompt('Enter number of rows and columns (e.g. 3x3)');
    if (tableSize) {
      const [rows, cols] = tableSize.split('x').map(value => parseInt(value.trim(), 10));
      if (rows && cols) {
        let tableHtml = '<table>';
        for (let i = 0; i < rows; i++) {
          tableHtml += '<tr>';
          for (let j = 0; j < cols; j++) {
            tableHtml += '<td><br></td>';
          }
          tableHtml += '</tr>';
        }
        tableHtml += '</table>';
        this.quillEditor.quill.clipboard.dangerouslyPasteHTML(this.quillEditor.quill.getSelection().index, tableHtml);
      }
    }
  }
  

  // onEditorCreated(quillEditor: any) {
  //   this.quillEditor = quillEditor;
  // }
}