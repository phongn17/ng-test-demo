import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JediService } from './jedi.service';

describe('JediService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JediService]
  }));

  it('should be created', () => {
    const service: JediService = TestBed.get(JediService);
    expect(service).toBeTruthy();
  });
});
