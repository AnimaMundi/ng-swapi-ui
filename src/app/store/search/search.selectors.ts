import { createFeatureSelector, createSelector } from '@ngrx/store';

import { prop } from '@shared/utils';

import { SEARCH_STATE_KEY, SearchState } from './search.state';

export const selectSearchState = createFeatureSelector<SearchState>(
  SEARCH_STATE_KEY
);

export const getSearchQuery = createSelector(
  selectSearchState,
  prop('query')
);
