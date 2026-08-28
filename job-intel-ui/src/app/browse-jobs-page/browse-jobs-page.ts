import { Component } from '@angular/core';
import { FilterBox } from './filter-box/filter-box';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-browse-jobs-page',
  imports: [FilterBox, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './browse-jobs-page.html',
  styleUrl: './browse-jobs-page.css',
})
export class BrowseJobsPage {}
