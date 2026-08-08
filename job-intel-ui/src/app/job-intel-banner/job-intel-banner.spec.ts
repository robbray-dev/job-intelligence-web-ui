import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIntelBanner } from './job-intel-banner';

describe('JobIntelBanner', () => {
  let component: JobIntelBanner;
  let fixture: ComponentFixture<JobIntelBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobIntelBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(JobIntelBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
