import { Service } from '@angular/core';

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
@Service()
export class DummyApi {}
