import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// FIXME : a remplacer par l'appel au serveur
import { REPORTS } from './mock-reports';
import { Report } from './report';

@Injectable()
export class ReportService {
  constructor() {}

  getReports(): Observable<Report[]> {
    return of(REPORTS);
  }

  getReport(id: number): Observable<Report> {
    return of(REPORTS.find(report => report.id === id));
  }
}
