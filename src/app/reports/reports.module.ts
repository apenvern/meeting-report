import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from './shared/report.service';
import { ReportListComponent } from './report-list/report-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [ReportListComponent],
  declarations: [ReportListComponent],
  providers: [ReportService]
})
export class ReportsModule {}
