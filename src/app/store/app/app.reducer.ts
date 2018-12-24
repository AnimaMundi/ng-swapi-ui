import { ActionReducerMap } from '@ngrx/store';

import { SEARCH_STATE_KEY, searchReducer } from '../search';
import {
  SEARCH_RESULTS_STATE_KEY,
  searchResultsReducer
} from '../search-results';
import { AppState } from './app.state';

export const appReducer: ActionReducerMap<AppState> = {
  [SEARCH_STATE_KEY]: searchReducer,
  [SEARCH_RESULTS_STATE_KEY]: searchResultsReducer
};
