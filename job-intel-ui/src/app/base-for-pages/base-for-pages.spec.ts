import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseForPages } from './base-for-pages';

describe('BaseForPages', () => {
  let component: BaseForPages;
  let fixture: ComponentFixture<BaseForPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseForPages],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseForPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
