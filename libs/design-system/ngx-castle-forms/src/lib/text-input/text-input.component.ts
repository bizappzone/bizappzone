import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  constructor() {
    console.log('DS-FM-text-input-component');
  }

  ngOnInit(): void {
    console.log('DS-FM-text-input-component');
  }
}
