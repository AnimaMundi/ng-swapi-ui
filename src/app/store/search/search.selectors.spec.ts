import { AppState } from '../app';
import { getSearchQuery, selectSearchState } from './search.selectors';

const state: AppState = {
  search: {
    query: 'searchQuery'
  }
};

describe('SearchSelectors', () => {
  describe('selectSearchState', () => {
    it('should select search state', () => {
      const result = selectSearchState(state);

      expect(result).toEqual(state.search);
    });
  });

  describe('getSearchQuery', () => {
    it('should select searchQuery', () => {
      const result = getSearchQuery(state);

      expect(result).toEqual(state.search.query);
    });
  });
});
