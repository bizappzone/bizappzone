import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {
    console.log('DS-button-component');
  }

  ngOnInit(): void {
    console.log('DS-button-component');
  }
}
