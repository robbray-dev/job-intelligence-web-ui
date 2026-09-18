import { Component, OnInit } from '@angular/core';
import { FilterBox } from './filter-box/filter-box';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropdownButton } from './dropdown-button/dropdown-button';
import { DummyApi, Job, JobResponse } from '../Service/dummy-api';

@Component({
  selector: 'app-browse-jobs-page',
  imports: [FilterBox, MatFormFieldModule, MatIconModule, MatInputModule, DropdownButton],
  templateUrl: './browse-jobs-page.html',
  styleUrl: './browse-jobs-page.css',
})
export class BrowseJobsPage implements OnInit {
  jobs: JobResponse | undefined;

  constructor(private service: DummyApi) {}

  ngOnInit(): void {
    this.service.fetchJsonData().subscribe({
      next: (data) => {
        this.jobs = data;
        const temps = this.jobs;
        console.log('JSON Data Loaded:', this.jobs.jobs);
        console.log(typeof this.jobs);
        console.log('temps', temps);
        var keys = Object.keys(this.jobs);
        console.log('keys', keys);

        console.log('something', this.jobs);
        console.log('JSON Data:', this.jobs.jobs);
        const jobArray = this.jobs.jobs;

        jobArray.forEach((job: Job) => {
          console.log('job title here', job.title);
        });
        let arr: string[] = ['here', 'hs'];
        console.log('yer:', arr);
      },
      error: (err) => {
        console.error('Error loading JSON data:', err);
      },
    });
  }
}
