import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableStdComponent } from './table-std/table-std.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TableBasicComponent,
    TableStdComponent
  ],
  exports: [
    TableBasicComponent,
    TableStdComponent
  ],
})
export class NgxCastleTablesModule {}
