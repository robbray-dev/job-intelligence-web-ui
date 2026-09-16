import { Component, OnInit } from '@angular/core';
import { FilterBox } from './filter-box/filter-box';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropdownButton } from './dropdown-button/dropdown-button';
import { DummyApi, Job } from '../Service/dummy-api';

@Component({
  selector: 'app-browse-jobs-page',
  imports: [FilterBox, MatFormFieldModule, MatIconModule, MatInputModule, DropdownButton],
  templateUrl: './browse-jobs-page.html',
  styleUrl: './browse-jobs-page.css',
})
export class BrowseJobsPage implements OnInit {
  jobs: any[] = [];

  constructor(private service: DummyApi) {}

  ngOnInit(): void {
    this.service.fetchJsonData().subscribe({
      next: (data) => {
        this.jobs = data;
        console.log('JSON Data Loaded:', this.jobs);
      },
      error: (err) => {
        console.error('Error loading JSON data:', err);
      },
    });
  }
}
