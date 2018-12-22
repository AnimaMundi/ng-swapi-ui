import { Action } from '@ngrx/store';

export enum SearchAction {
  SearchQueryChanged = '[Search] Search Query Changed',
  SearchFormSubmitted = '[Search] Search Form Submitted'
}

export class SearchQueryChangedAction implements Action {
  public readonly type = SearchAction.SearchQueryChanged;

  constructor(public readonly payload: string) {}
}

export class SearchFormSubmittedAction implements Action {
  public readonly type = SearchAction.SearchFormSubmitted;
}

export type SearchActionType =
  | SearchQueryChangedAction
  | SearchFormSubmittedAction;
