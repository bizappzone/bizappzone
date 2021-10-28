import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-card-std',
  templateUrl: './card-std.component.html',
  styleUrls: ['./card-std.component.scss'],
})
export class CardStdComponent implements OnInit {
  constructor() {
    console.log('DS-EL-card-std-component');
  }

  ngOnInit(): void {
    console.log('DS-EL-card-std-component');
  }
}
