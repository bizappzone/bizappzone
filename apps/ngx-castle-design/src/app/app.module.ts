import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgxCastleUiModule } from '@bizappzone/ngx-castle-ui';
import { NgxCastleFormsModule } from '@bizappzone/ngx-castle-forms';
import { NgxCastleTablesModule } from '@bizappzone/ngx-castle-tables';
import { NgxCastleElementsModule } from '@bizappzone/ngx-castle-elements';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NgxCastleUiModule,
    NgxCastleFormsModule,
    NgxCastleTablesModule,
    NgxCastleElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
