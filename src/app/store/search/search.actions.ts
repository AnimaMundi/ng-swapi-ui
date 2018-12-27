import { Action } from '@ngrx/store';

export enum SearchAction {
  SearchQueryChanged = '[Search] Search Query Changed',
  SearchFormSubmitted = '[Search] Search Form Submitted',
  PrevPageClicked = '[Search] Previous Page Clicked',
  NextPageClicked = '[Search] Next Page Clicked'
}

export class SearchQueryChangedAction implements Action {
  public readonly type = SearchAction.SearchQueryChanged;

  constructor(public readonly payload: string) {}
}

export class SearchFormSubmittedAction implements Action {
  public readonly type = SearchAction.SearchFormSubmitted;
}

export class PrevPageClickedAction implements Action {
  public readonly type = SearchAction.PrevPageClicked;
}

export class NextPageClickedAction implements Action {
  public readonly type = SearchAction.NextPageClicked;
}

export type SearchActionType =
  | SearchQueryChangedAction
  | SearchFormSubmittedAction
  | PrevPageClickedAction
  | NextPageClickedAction;
