import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { ReportsModule } from './reports/reports.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot(), ReportsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
