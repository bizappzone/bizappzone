import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent implements OnInit {
  constructor() {
    console.log('DS-FM-fieldset-component');
  }

  ngOnInit(): void {
    console.log('DS-FM-fieldset-component');
  }
}
