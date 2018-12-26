import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '@env';
import { ApiPerson, ApiPlanet, ApiResponse } from '@shared/models';
import { mockApiPerson, mockPlanet } from '@test';

import { SwapiService } from './swapi.service';

const personRes: ApiResponse<ApiPerson> = {
  count: 1,
  results: [mockApiPerson]
};

const planetRes: ApiResponse<ApiPlanet> = {
  count: 1,
  results: [mockPlanet]
};

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

      const personTestRequest = httpTestingController.expectOne(
        req => req.url === `${environment.swapi.rootUrl}/people`
      );
      personTestRequest.flush(personRes);

      const planetTestRquest = httpTestingController.expectOne(
        mockApiPerson.homeworld
      );
      planetTestRquest.flush(planetRes);

      expect(personTestRequest.request.method).toEqual('GET');
      expect(personTestRequest.request.params.get('search')).toEqual(
        searchQuery
      );
      expect(personTestRequest.request.params.get('page')).toEqual(
        String(page)
      );

      expect(planetTestRquest.request.method).toEqual('GET');
    });
  });
});
