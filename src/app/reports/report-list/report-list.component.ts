import { Component, OnInit } from '@angular/core';
import { Report } from '../shared/report';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reports: Report[];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.getReports();
  }

  getReports(): void {
    this.reportService
      .getReports()
      .subscribe(reports => (this.reports = reports));
  }

}
