import { TestBed } from '@angular/core/testing';

import { DependencyService } from './dependency.service';

describe('DependencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DependencyService = TestBed.get(DependencyService);
    expect(service).toBeTruthy();
  });
});
