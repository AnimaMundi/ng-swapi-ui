import { mockState } from '@test';

import { getSearchQuery, selectSearchState } from './search.selectors';

describe('SearchSelectors', () => {
  describe('selectSearchState', () => {
    it('should select search state', () => {
      const result = selectSearchState(mockState);

      expect(result).toEqual(mockState.search);
    });
  });

  describe('getSearchQuery', () => {
    it('should select searchQuery', () => {
      const result = getSearchQuery(mockState);

      expect(result).toEqual(mockState.search.query);
    });
  });
});
