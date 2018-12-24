import { AppState } from '@store/app';
import { mockPerson, mockState } from '@test';

import {
  getIsSearchResultLoading,
  getSearchResult,
  getSearchResultCount,
  getSearchResultMeta,
  getSearchResultPage,
  getSearchResultTotalCount,
  selectSearchResultsState
} from './search-results.selectors';

describe('SearchResultsSelectors', () => {
  describe('selectSearchResultsState', () => {
    it('should select search results state', () => {
      const result = selectSearchResultsState(mockState);

      expect(result).toEqual(mockState.searchResults);
    });
  });

  describe('getSearchResultTotalCount', () => {
    it('should get the total count of results', () => {
      const result = getSearchResultTotalCount(mockState);

      expect(result).toEqual(mockState.searchResults.total);
    });
  });

  describe('getSearchResultsPage', () => {
    it('should get the current results page', () => {
      const result = getSearchResultPage(mockState);

      expect(result).toEqual(mockState.searchResults.page);
    });
  });

  describe('getSearchResult', () => {
    it('should get the search result', () => {
      const result = getSearchResult(mockState);

      expect(result).toEqual(mockState.searchResults.results);
    });
  });

  describe('getIsSearchResultLoading', () => {
    it('should get search result isLoading', () => {
      const result = getIsSearchResultLoading(mockState);

      expect(result).toEqual(mockState.searchResults.isLoading);
    });
  });

  describe('getSearchResultCount', () => {
    it('should calculate the search result count', () => {
      const result = getSearchResultCount(mockState);

      expect(result).toEqual(1);
    });
  });

  describe('getSearchResultMeta', () => {
    it('should calculate the search result meta for 1 result', () => {
      const state: AppState = {
        ...mockState,
        searchResults: {
          ...mockState.searchResults,
          page: 1,
          results: [mockPerson],
          total: 1
        }
      };
      const result = getSearchResultMeta(state);

      expect(result).toEqual({
        total: 1,
        visible: {
          lower: 1,
          upper: 1
        }
      });
    });

    it('should calculate the search result meta for multiple results', () => {
      const state: AppState = {
        ...mockState,
        searchResults: {
          ...mockState.searchResults,
          page: 1,
          results: new Array(3).fill(mockPerson),
          total: 3
        }
      };
      const result = getSearchResultMeta(state);

      expect(result).toEqual({
        total: 3,
        visible: {
          lower: 1,
          upper: 3
        }
      });
    });

    it('should calculate the search result meta for multiple results across multiple pages', () => {
      const state: AppState = {
        ...mockState,
        searchResults: {
          ...mockState.searchResults,
          page: 2,
          results: new Array(5).fill(mockPerson),
          total: 15
        }
      };
      const result = getSearchResultMeta(state);

      expect(result).toEqual({
        total: 15,
        visible: {
          lower: 11,
          upper: 15
        }
      });
    });

    it('should calculate the search result meta for no results', () => {
      const state: AppState = {
        ...mockState,
        searchResults: {
          ...mockState.searchResults,
          page: 1,
          results: [],
          total: 0
        }
      };
      const result = getSearchResultMeta(state);

      expect(result).toEqual({
        total: 0,
        visible: {
          lower: 0,
          upper: 0
        }
      });
    });
  });
});
