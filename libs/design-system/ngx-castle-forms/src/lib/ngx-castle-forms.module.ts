import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FieldsetComponent,
    FormContainerComponent,
    TextInputComponent,
    TextAreaComponent
  ],
  exports: [
    FieldsetComponent,
    FormContainerComponent,
    TextInputComponent,
    TextAreaComponent
  ],
})
export class NgxCastleFormsModule {}
