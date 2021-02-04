import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;
  pageSize = 7;

  columns = [{ prop: 'name' }, { name: 'website' }, { name: 'email' }];

  @Input() data;

  constructor() {
  }

  ngOnInit(): void {
    this.rows = this.data;
  }

  // update pagesize for view count change
  updateViewCount() { }

  // Function to filter table data
  updateFilter(event) {
    this.rows = this.data;
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
}
