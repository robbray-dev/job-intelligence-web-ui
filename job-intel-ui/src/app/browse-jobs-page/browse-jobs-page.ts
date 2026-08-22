import { Component } from '@angular/core';
import { FilterBox } from './filter-box/filter-box';

@Component({
  selector: 'app-browse-jobs-page',
  imports: [FilterBox],
  templateUrl: './browse-jobs-page.html',
  styleUrl: './browse-jobs-page.css',
})
export class BrowseJobsPage {}
