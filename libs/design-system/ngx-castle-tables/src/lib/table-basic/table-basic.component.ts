import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss'],
})
export class TableBasicComponent implements OnInit {
  constructor() {
    console.log('DS-TB-table-basic-component');
  }

  ngOnInit(): void {
    console.log('DS-TB-table-basic-component');
  }
}
