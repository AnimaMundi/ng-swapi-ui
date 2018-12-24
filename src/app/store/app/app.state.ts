import { SEARCH_STATE_KEY, SearchState } from '../search';
import {
  SEARCH_RESULTS_STATE_KEY,
  SearchResultsState
} from '../search-results';

export interface AppState {
  [SEARCH_STATE_KEY]: SearchState;
  [SEARCH_RESULTS_STATE_KEY]: SearchResultsState;
}
