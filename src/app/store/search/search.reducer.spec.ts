import { SearchQueryChangedAction } from './search.actions';
import { searchReducer } from './search.reducer';
import { initialSearchState, SearchState } from './search.state';

describe('SearchReducer', () => {
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
