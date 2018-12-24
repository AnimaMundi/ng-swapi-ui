import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { PeopleApiResponse } from '@shared/models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  private rootUrl = environment.swapi.rootUrl;

  constructor(private readonly httpClient: HttpClient) {}

  public getPeople(
    search: string,
    page: number
  ): Observable<PeopleApiResponse> {
    return this.httpClient
      .get<PeopleApiResponse>(`${this.rootUrl}/people`, {
        params: {
          search,
          page: String(page)
        }
      })
      .pipe(
        map(res => ({
          ...res,
          results: res.results.map(result => ({
            ...result,
            mass: Number(result.mass),
            weight: Number(result.mass)
          }))
        }))
      );
  }
}
