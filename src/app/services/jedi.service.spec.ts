import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JediService } from './jedi.service';

describe('JediService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JediService]
  }));

  it('testing getJedis() and expect a list of jedis back', () => {
    const service: JediService = TestBed.get(JediService);
    const http = TestBed.get(HttpTestingController);

    // define our mock data
    const expected = [{ name: 'Luke' }, { name: 'Darth Vader' }];

    // we actively call getJedis() on jediService, then set that response to our 'actual' variable
    service.getJedis().subscribe(data => {
      const actual = data;
      expect(actual).toEqual(expected);
    });

    // when someone calls URL /api/jedis, we will resolve that asynchronous operation with .flush() while also answering with 'expected' varibale as response data
    http.expectOne('/api/jedis').flush(expected);
  });
});
