import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    BadgeComponent
  ],
  exports: [
    ButtonComponent,
    BadgeComponent
  ],
})
export class NgxCastleUiModule {}
