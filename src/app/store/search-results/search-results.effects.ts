import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mapTo,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';

import { SwapiService } from '@shared/swapi';

import { AppState } from '../app';
import {
  getSearchQuery,
  SearchAction,
  SearchFormSubmittedAction
} from '../search';
import {
  GetSearchResultsAction,
  GetSearchResultsFailureAction,
  GetSearchResultsSuccessAction,
  SearchResultsAction
} from './search-results.actions';
import { getSearchResultPage } from './search-results.selectors';

@Injectable()
export class SearchResultEffects {
  @Effect()
  public triggerGetSearchResults$ = this.actions$.pipe(
    ofType<SearchFormSubmittedAction>(SearchAction.SearchFormSubmitted),
    mapTo(new GetSearchResultsAction())
  );

  @Effect()
  public getSearchResults$ = this.actions$.pipe(
    ofType<GetSearchResultsAction>(SearchResultsAction.GetSearchResults),
    withLatestFrom(
      this.store$.pipe(select(getSearchQuery)),
      this.store$.pipe(select(getSearchResultPage))
    ),
    switchMap(([_, searchQuery, currentPage]) =>
      this.swapiService.getPeople(searchQuery, currentPage).pipe(
        map(res => new GetSearchResultsSuccessAction(res)),
        catchError(err => of(new GetSearchResultsFailureAction(err)))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<AppState>,
    private readonly swapiService: SwapiService
  ) {}
}
