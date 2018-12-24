import { Person } from '@shared/models';

export const SEARCH_RESULTS_STATE_KEY = 'searchResults';

export interface SearchResultsState {
  total: number;
  page: number;
  isLoading: boolean;
  results: Person[];
}

export const initialSearchResultsState: SearchResultsState = {
  total: 0,
  page: 1,
  isLoading: false,
  results: []
};
