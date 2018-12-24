import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '@env';

import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    service = TestBed.get(SwapiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getPeople', () => {
    it('should make a request with the provided parameters', () => {
      const searchQuery = 'searchQuery';
      const page = 1;

      service.getPeople(searchQuery, page).subscribe();

      const testRequest = httpTestingController.expectOne(
        req => req.url === `${environment.swapi.rootUrl}/people`
      );

      expect(testRequest.request.method).toEqual('GET');
      expect(testRequest.request.params.get('search')).toEqual(searchQuery);
      expect(testRequest.request.params.get('page')).toEqual(String(page));

      testRequest.flush({});
    });
  });
});
