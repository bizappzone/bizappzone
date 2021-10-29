import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  constructor() {
    console.log('DS-FM-text-area-component');
  }

  ngOnInit(): void {
    console.log('DS-FM-text-area-component');
  }
}
