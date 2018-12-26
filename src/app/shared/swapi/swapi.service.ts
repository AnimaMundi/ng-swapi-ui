import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { environment } from '@env';
import { ApiPerson, ApiPlanet, ApiResponse, Person } from '@shared/models';
import { map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  private rootUrl = environment.swapi.rootUrl;

  constructor(private readonly httpClient: HttpClient) {}

  public getPeople(
    search: string,
    page: number
  ): Observable<ApiResponse<Person>> {
    return this.httpClient
      .get<ApiResponse<ApiPerson>>(`${this.rootUrl}/people`, {
        params: {
          search,
          page: String(page)
        }
      })
      .pipe(
        switchMap(people =>
          forkJoin(
            people.results.map(({ homeworld }) =>
              this.httpClient.get<ApiPlanet>(homeworld)
            )
          ).pipe(
            map(planets => ({
              ...people,
              results: people.results.map((result, index) => ({
                ...result,
                homeworld: planets[index],
                mass: Number(result.mass),
                height: Number(result.height)
              }))
            }))
          )
        )
      );
  }
}
