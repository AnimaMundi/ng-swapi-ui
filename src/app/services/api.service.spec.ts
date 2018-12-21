import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService = null;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  beforeEach(inject([ApiService], (apiService: ApiService) => {
    service = apiService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves all the organisms', async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    service
      .getAllPeople()
      .subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));
});
