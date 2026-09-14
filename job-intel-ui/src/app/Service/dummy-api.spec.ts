import { TestBed } from '@angular/core/testing';

import { DummyApi } from './dummy-api';

describe('DummyApi', () => {
  let service: DummyApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
