import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { CardStdComponent } from './card-std/card-std.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardBasicComponent,
    CardStdComponent
  ],
  exports: [
    CardBasicComponent,
    CardStdComponent
  ],
})
export class NgxCastleElementsModule {}
