import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobsPage } from './browse-jobs-page';
import { vi } from 'vitest';
import { DummyApi } from '../Service/dummy-api';

describe('BrowseJobsPage', () => {
  let component: BrowseJobsPage;
  let fixture: ComponentFixture<BrowseJobsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseJobsPage],
      providers: [{ provide: DummyApi, useValue: vi.mockObject(DummyApi) }],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseJobsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
