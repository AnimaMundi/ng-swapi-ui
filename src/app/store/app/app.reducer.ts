import { ActionReducerMap } from '@ngrx/store';

import { SEARCH_STATE_KEY, searchReducer } from '../search';
import { AppState } from './app.state';

export const appReducer: ActionReducerMap<AppState> = {
  [SEARCH_STATE_KEY]: searchReducer
};
