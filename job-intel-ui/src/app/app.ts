import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './banner/banner';
import { BrowseJobsPage } from './browse-jobs-page/browse-jobs-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, BrowseJobsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-intel-ui');
}
