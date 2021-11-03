import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'baz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = '';

  // @Input() isDisabled?: boolean = false;
  // @Input() inIcon?: string = ''; //inIconLib
  // @Input() inIconColor?: string = '';
  // @Input() inIconAlignment?: string = 'left';
  // @Input() isLink?: boolean = false;
  // @Input() inRouterLink?: string = '';
  // @Input() inColorClass: string = 'basic';
  // @Input() inRounded: string = 'btn-round-xs'; // accepts rounded-lg rounded-sm
  // @Output() onClick = new EventEmitter();
  // @Input() inWidth?: string = 'btn-lg';
  // @Input() inAddClass?: string;
  // @Input() inIconSize?: number;
  // @Output() onTap = new EventEmitter<void>();
  // @Input() inBadgeValue?: number; // badge count
  // @Input() inColorClassBadge?: string = ''; // primary || accent  ||  warn
  // @Input() inBadgePosition?: string = ''; // before ||  after ||  below after ||  above before
  // @Input() inBadgeSize?: string = 'medium'; // small || medium  || large

  constructor() {
    // console.log('DS-button-component w title :' + this._title);
  }

  ngOnInit(): void {
    console.log('DS-button-component w title :' + this.label);
  }
}
