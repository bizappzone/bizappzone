import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-table-std',
  templateUrl: './table-std.component.html',
  styleUrls: ['./table-std.component.scss'],
})
export class TableStdComponent implements OnInit {
  constructor() {
    console.log('DS-TB-table-std-component');
  }

  ngOnInit(): void {
    console.log('DS-TB-table-std-component');
  }
}
