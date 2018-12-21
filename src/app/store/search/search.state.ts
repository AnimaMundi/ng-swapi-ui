export const SEARCH_STATE_KEY = 'search';

export interface SearchState {
  query: string;
}

export const initialSearchState: SearchState = {
  query: ''
};
