import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobIntelBanner } from './job-intel-banner/job-intel-banner';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobIntelBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-intel-ui');
}
