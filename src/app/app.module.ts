import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot(), ReportsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
