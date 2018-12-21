import { Action } from '@ngrx/store';

export enum SearchAction {
  SearchQueryChanged = '[Search] Search Query Changed'
}

export class SearchQueryChangedAction implements Action {
  public readonly type = SearchAction.SearchQueryChanged;

  constructor(public readonly payload: string) {}
}

export type SearchActionType = SearchQueryChangedAction;
