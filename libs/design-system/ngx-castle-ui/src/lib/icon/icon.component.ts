import { Component, Input, OnInit } from '@angular/core';
import { iconActions } from '@bizappzone/castle-icons';

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

  @Input() iconAction?: string;
  @Input() iconPath?: string;

  constructor() {}

  ngOnInit(): void {
    this.iconAction = iconActions.EDIT;
    this.iconPath = iconActions.EDIT2;
    console.log('DS-icon-component w title :');
  }
}
