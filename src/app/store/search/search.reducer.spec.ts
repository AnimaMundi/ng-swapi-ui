import { SearchQueryChangedAction } from './search.actions';
import { searchReducer } from './search.reducer';
import { initialSearchState } from './search.state';

describe('SearchReducer', () => {
  describe('SearchQueryChangedAction', () => {
    it('should set search query', () => {
      const payload = 'searchQuery';
      const action = new SearchQueryChangedAction(payload);
      const state = initialSearchState;

      const result = searchReducer(state, action);

      expect(result).toEqual({
        ...state,
        query: payload
      });
    });
  });
});
