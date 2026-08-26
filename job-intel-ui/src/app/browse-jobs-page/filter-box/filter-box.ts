import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgToggleComponent } from 'ng-toggle-button';
import { MatButtonModule } from '@angular/material/button';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-filter-box',
  imports: [MatCheckboxModule, NgToggleComponent, MatButtonModule, NgxSliderModule, MatDividerModule],
  templateUrl: './filter-box.html',
  styleUrl: './filter-box.css',
})
export class FilterBox {
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
  };
}
