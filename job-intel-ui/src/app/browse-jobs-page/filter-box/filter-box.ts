import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgToggleComponent } from 'ng-toggle-button';
import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-filter-box',
  imports: [MatCheckboxModule, NgToggleComponent, MatButtonModule, MatDividerModule],
  templateUrl: './filter-box.html',
  styleUrl: './filter-box.css',
})
export class FilterBox {}
