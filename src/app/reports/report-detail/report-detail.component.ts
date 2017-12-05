import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Application import
import { ReportService } from '../shared/report.service';
import { Report } from '../shared/report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  report: Report;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getReport();
  }

  getReport(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reportService
      .getReport(id)
      .subscribe(report => (this.report = report));
  }

  goBack(): void {
    this.location.back();
  }
}
