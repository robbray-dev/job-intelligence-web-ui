import { Component } from '@angular/core';
import { Banner } from './banner/banner';

@Component({
  selector: 'app-base-for-pages',
  imports: [Banner],
  templateUrl: './base-for-pages.html',
  styleUrl: './base-for-pages.css',
})
export class BaseForPages {}
