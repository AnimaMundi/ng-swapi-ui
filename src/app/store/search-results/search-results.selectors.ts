import { createFeatureSelector, createSelector } from '@ngrx/store';

import { prop } from '@shared/utils';

import {
  SEARCH_RESULTS_STATE_KEY,
  SearchResultsState
} from './search-results.state';
import {
  calculateSearchResultCount,
  calculateSearchResultMeta
} from './search-results.utils';

export const selectSearchResultsState = createFeatureSelector<
  SearchResultsState
>(SEARCH_RESULTS_STATE_KEY);

export const getSearchResultTotalCount = createSelector(
  selectSearchResultsState,
  prop('total')
);

export const getSearchResultPage = createSelector(
  selectSearchResultsState,
  prop('page')
);

export const getSearchResult = createSelector(
  selectSearchResultsState,
  prop('results')
);

export const getIsSearchResultLoading = createSelector(
  selectSearchResultsState,
  prop('isLoading')
);

export const getNextResultPage = createSelector(
  selectSearchResultsState,
  prop('next')
);

export const getPrevResultPage = createSelector(
  selectSearchResultsState,
  prop('prev')
);

export const getSearchResultCount = createSelector(
  getSearchResult,
  calculateSearchResultCount
);

export const getSearchResultMeta = createSelector(
  getSearchResultTotalCount,
  getSearchResultCount,
  getSearchResultPage,
  calculateSearchResultMeta
);
