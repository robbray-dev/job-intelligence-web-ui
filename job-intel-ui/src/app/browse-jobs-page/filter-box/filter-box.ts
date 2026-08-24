import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-filter-box',
  imports: [MatCheckboxModule],
  templateUrl: './filter-box.html',
  styleUrl: './filter-box.css',
})
export class FilterBox {}
