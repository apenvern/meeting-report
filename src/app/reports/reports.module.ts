import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Application import
import { ReportService } from './shared/report.service';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportsRoutingModule } from './/reports-routing.module';

@NgModule({
  imports: [CommonModule, ReportsRoutingModule, FormsModule],
  exports: [ReportListComponent, ReportDetailComponent],
  declarations: [ReportListComponent, ReportDetailComponent],
  providers: [ReportService]
})
export class ReportsModule {}
