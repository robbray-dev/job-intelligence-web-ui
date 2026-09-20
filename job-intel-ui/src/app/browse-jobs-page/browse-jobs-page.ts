import { Component, OnInit } from '@angular/core';
import { FilterBox } from './filter-box/filter-box';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropdownButton } from './dropdown-button/dropdown-button';
import { DummyApi, Job, JobResponse } from '../Service/dummy-api';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-browse-jobs-page',
  imports: [
    FilterBox,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    DropdownButton,
    MatButtonModule,
  ],
  templateUrl: './browse-jobs-page.html',
  styleUrl: './browse-jobs-page.css',
})
export class BrowseJobsPage implements OnInit {
  jobs: JobResponse | undefined;
  jobsArray: Job[];
  titleH: string | undefined;

  constructor(private service: DummyApi) {
    this.jobsArray = [];
  }

  ngOnInit(): void {
    this.service.fetchJsonData().subscribe({
      next: (data) => {
        this.jobs = data;
        this.jobsArray = data.jobs;
        this.titleH = this.jobs.jobs[0].title;
      },
      error: (err) => {
        console.error('Error loading JSON data:', err);
      },
    });
  }
}
