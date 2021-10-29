import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  constructor() {
    console.log('DS-badge-component');
  }

  ngOnInit(): void {
    console.log('DS-badge-component');
  }
}
