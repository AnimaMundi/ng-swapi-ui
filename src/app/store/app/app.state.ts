import { SEARCH_STATE_KEY, SearchState } from '../search';

export interface AppState {
  [SEARCH_STATE_KEY]: SearchState;
}
