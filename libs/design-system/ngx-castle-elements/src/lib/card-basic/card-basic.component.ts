import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
})
export class CardBasicComponent implements OnInit {
  constructor() {
    console.log('DS-EL-card-basic-component');
  }

  ngOnInit(): void {
    console.log('DS-EL-card-basic-component');
  }
}
