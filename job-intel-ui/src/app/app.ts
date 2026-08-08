import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseForPages } from './base-for-pages/base-for-pages';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseForPages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-intel-ui');
}
