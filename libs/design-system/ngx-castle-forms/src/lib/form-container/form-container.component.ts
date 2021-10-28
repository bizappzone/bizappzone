import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor() {
    console.log('DS-FM-form-container-component');
  }

  ngOnInit(): void {
    console.log('DS-FM-form-container-component');
  }
}
