import { Module } from 'quill';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class TableModule {
  
  constructor(@Inject ('quill') private quill: any,  @Inject('options') private options: any) {
    // super(quill, options);
    this.quill = quill;
    this.options = options;
  }

  insertTable(rows: any, cols: any) {
    const tableHtml = this.createTableHtml(rows, cols);
    this.quill.clipboard.dangerouslyPasteHTML(tableHtml);
  }

  createTableHtml(rows: any, cols: any) {
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

  insertColumnLeft() {
    const table = this.getClosestTable();
    if (table) {
      const cols = table.querySelectorAll('tr:first-child td').length;
      const newColHtml = '<td></td>'.repeat(cols);
      table
        .querySelectorAll('tr')
        .forEach(
          (tr: { innerHTML: string }) =>
            (tr.innerHTML = newColHtml + tr.innerHTML)
        );
    }
  }

  insertColumnRight() {
    const table = this.getClosestTable();
    if (table) {
      const cols = table.querySelectorAll('tr:first-child td').length;
      const newColHtml = '<td></td>'.repeat(cols);
      table
        .querySelectorAll('tr')
        .forEach((tr: { innerHTML: string }) => (tr.innerHTML += newColHtml));
    }
  }

  insertRowAbove() {
    const table = this.getClosestTable();
    if (table) {
      const newRowHtml =
        '<tr><td></td>'.repeat(
          table.querySelectorAll('tr:first-child td').length
        ) + '</tr>';
      table.insertAdjacentHTML('beforebegin', newRowHtml);
    }
  }

  insertRowBelow() {
    const table = this.getClosestTable();
    if (table) {
      const newRowHtml =
        '<tr><td></td>'.repeat(
          table.querySelectorAll('tr:first-child td').length
        ) + '</tr>';
      table.insertAdjacentHTML('afterend', newRowHtml);
    }
  }

  removeRow() {
    const table = this.getClosestTable();
    if (table) {
      const row = this.quill.getSelection().index;
      table.removeChild(table.rows[row]);
    }
  }

  removeColumn() {
    const table = this.getClosestTable();
    if (table) {
      const col = this.quill.getSelection().index;
      table
        .querySelectorAll('tr')
        .forEach((tr: { removeChild: (arg0: any) => any; cells: any[] }) =>
          tr.removeChild(tr.cells[col])
        );
    }
  }

  getClosestTable() {
    const selection = this.quill.getSelection();
    const node =
      selection.index >= 0
        ? this.quill.editor.dom.nodes[selection.index]
        : null;
    return node && node.tagName === 'TABLE' ? node : null;
  }
}
