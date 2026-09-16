import { HttpClient } from '@angular/common/http';
import { inject, Service, Signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  location: string;
  companyName: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  jobUrl: string;
  postedDate: string;
  skills: string[];
}

interface JobResponse {
  jobs: Job[];
}
@Service()
export class DummyApi {
  private http = inject(HttpClient);

  fetchJsonData(): Observable<any> {
    // Path to the JSON file (relative to the data folder)
    const jsonUrl = 'data/jobs.json';

    // Use http.get() to fetch the file. Returns an Observable.
    return this.http.get(jsonUrl);
  }
}
