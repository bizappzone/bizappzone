import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'baz-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconName?: string;
  @Input() iconSVG?: string;
  @Input() iconFillColor?: string;
  @Input() iconStrokeColor?: string;
  @Input() iconStrokeWidth?: string;
  @Input() iconSize?: string;
  @Input() inColorClass?:
    | 'default'
    | 'primary'
    | 'primary-alt'
    | 'secondary'
    | 'secondary-alt'
    | 'accent'
    | 'accent-alt'
    | 'warn'
    | 'disabled' = 'default';

  constructor() {}

  ngOnInit(): void {
    console.log('DS-icon-component w title :');
  }
}
