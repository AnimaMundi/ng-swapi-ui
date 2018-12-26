import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { ApiResponse, Person } from '@shared/models';

export enum SearchResultsAction {
  GetSearchResults = '[Search Results] Get Search Results',
  GetSearchResultsSuccess = '[Search Results] Get Search Results Success',
  GetSearchResultsFailure = '[Search Results] Get Search Results Failure'
}

export class GetSearchResultsAction implements Action {
  public readonly type = SearchResultsAction.GetSearchResults;
}

export class GetSearchResultsSuccessAction implements Action {
  public readonly type = SearchResultsAction.GetSearchResultsSuccess;

  constructor(public readonly payload: ApiResponse<Person>) {}
}

export class GetSearchResultsFailureAction implements Action {
  public readonly type = SearchResultsAction.GetSearchResultsFailure;

  constructor(public readonly payload: HttpErrorResponse) {}
}

export type SearchResultsActionType =
  | GetSearchResultsAction
  | GetSearchResultsSuccessAction
  | GetSearchResultsFailureAction;
