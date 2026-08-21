import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobsPage } from './browse-jobs-page';

describe('BrowseJobsPage', () => {
  let component: BrowseJobsPage;
  let fixture: ComponentFixture<BrowseJobsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseJobsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseJobsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
