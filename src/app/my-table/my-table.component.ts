import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css',
})
export class MyTableComponent implements OnInit {
  columns = ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'];
  data = [
    [
      'Tiger Nixon',
      'System Architect',
      'Edinburgh',
      61,
      '2011-04-25',
      '$320,800',
    ],
    ['Garrett Winters', 'Accountant', 'Tokyo', 63, '2011-04-25', '$170,750'],
    [
      'Ashton Cox',
      'Junior Technical Author',
      'San Francisco',
      66,
      '2009-01-12',
      '$86,000',
    ],
    [
      'Cedric Kelly',
      'Senior Javascript Developer',
      'Edinburgh',
      22,
      '2012-03-29',
      '$433,060',
    ],
    ['Airi Satou', 'Accountant', 'Tokyo', 33, '2008-11-28', '$162,700'],
    [
      'Brielle Williamson',
      'Integration Specialist',
      'New York',
      61,
      '2012-12-02',
      '$372,000',
    ],
    [
      'Herrod Chandler',
      'Sales Assistant',
      'San Francisco',
      59,
      '2012-08-06',
      '$137,500',
    ],
    [
      'Rhona Davidson',
      'Integration Specialist',
      'Tokyo',
      55,
      '2010-10-14',
      '$327,900',
    ],
  ];
  user: any = [];
  selectedColumn: number[] = [3, 4, 5];
  columnVisibility: any = {};
  selectedRow = '';
  searchTerm = '';
  constructor(private userData: UserApiService) {}
  ngOnInit(): void {}
  // Single option select
  // getColumnDisplay(index: number) {
  //   return this.selectedColumn === index.toString()? 'none' : '';
  // }

  // Multiple option selects
  getColumnDisplay(index: number) {
    return this.selectedColumn.includes(index) ? 'none' : '';
  }
  get filteredData() {
    return this.data.filter((row) => {
      return row.some((cell) => {
        return cell
          .toString()
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    });
  }
}
