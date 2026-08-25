import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgToggleComponent } from 'ng-toggle-button';

@Component({
  selector: 'app-filter-box',
  imports: [MatCheckboxModule, NgToggleComponent],
  templateUrl: './filter-box.html',
  styleUrl: './filter-box.css',
})
export class FilterBox {}
