import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportListComponent } from './report-list/report-list.component';

const reportsRoutes: Routes = [
  { path: 'reports', component: ReportListComponent },
  { path: 'report/:id', component: ReportDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(reportsRoutes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
