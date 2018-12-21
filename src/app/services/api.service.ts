import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';

import { environment } from '@env';
import { Organism } from '@shared/models';
import { isNil } from '@shared/utils';

// Load the API_URL from the environment variable
const API_URL = environment.apiUrl;

/**
 * Star Wars API Interface
 * defines and object with a string property for the next url page
 * and an Organism property for the returned results
 */
interface SwapiRes {
  next: string;
  results: Organism;
}

/**
 * API SERVICE
 *
 * Methods for communicating with the Star Wars API
 * and for distributing the data.
 */

@Injectable({ providedIn: 'root' })
export class ApiService {
  // Provide the http module to the service
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns an observable of all Organisms in the API
   */
  public getAllPeople(): Observable<Organism[]> {
    // Request the first page from the API
    return this.getApiPage(API_URL).pipe(
      expand(
        // Expand the reults of the first call to recursively load each page of results
        (r: SwapiRes) => (isNil(r.next) ? EMPTY : this.getApiPage(r.next))
      ),
      reduce(
        // Reduce the API responses into a single array of Organisms
        (a: Organism[], v: SwapiRes) => a.concat(v.results),
        []
      )
    );
  }

  /**
   * Returns the JSON from a URL
   */
  private getApiPage(url: string): Observable<SwapiRes> {
    return this.httpClient.get<SwapiRes>(url);
  }
}
