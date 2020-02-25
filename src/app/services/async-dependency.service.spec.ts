import { TestBed } from '@angular/core/testing';

import { AsyncDependencyService } from './async-dependency.service';

describe('AsyncDependencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncDependencyService = TestBed.get(AsyncDependencyService);
    expect(service).toBeTruthy();
  });
});
