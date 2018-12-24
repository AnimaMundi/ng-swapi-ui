import { SearchQueryChangedAction } from './search.actions';
import { searchReducer } from './search.reducer';
import { initialSearchState, SearchState } from './search.state';

describe('SearchReducer', () => {
  describe('Initial state', () => {
    it('should initialize state if its not provided', () => {
      const action = { type: 'type' };

      const result = searchReducer(undefined, action as any);

      expect(result).toEqual(initialSearchState);
    });
  });

  describe('Unrecognized action', () => {
    it('should return the current state untouched', () => {
      const action = { type: 'type' };
      const state: SearchState = initialSearchState;

      const result = searchReducer(state, action as any);

      expect(result).toEqual(state);
    });
  });

  describe('SearchQueryChangedAction', () => {
    it('should set search query', () => {
      const payload = 'searchQuery';
      const action = new SearchQueryChangedAction(payload);
      const state: SearchState = {
        ...initialSearchState,
        query: 'oldSearchQuery'
      };

      const result = searchReducer(state, action);

      expect(result).toEqual({
        ...state,
        query: payload
      });
    });
  });
});
