import { HttpErrorResponse } from '@angular/common/http';

import { PeopleApiResponse } from '@shared/models';
import { mockPerson } from '@test';

import {
  GetSearchResultsAction,
  GetSearchResultsFailureAction,
  GetSearchResultsSuccessAction
} from './search-results.actions';
import { searchResultsReducer } from './search-results.reducer';
import {
  initialSearchResultsState,
  SearchResultsState
} from './search-results.state';

describe('SearchResultsReducer', () => {
  describe('GetSearchResultsAction', () => {
    it('should set isLoading to true', () => {
      const action = new GetSearchResultsAction();
      const state: SearchResultsState = {
        ...initialSearchResultsState,
        isLoading: false
      };

      const result = searchResultsReducer(state, action);

      expect(result).toEqual({
        ...state,
        isLoading: true
      });
    });
  });

  describe('GetSearchResultsSuccessAction', () => {
    it('should set isLoading, total and results', () => {
      const payload: PeopleApiResponse = {
        count: 10,
        results: [mockPerson]
      };
      const state: SearchResultsState = {
        ...initialSearchResultsState,
        isLoading: true,
        total: 0,
        results: []
      };
      const action = new GetSearchResultsSuccessAction(payload);

      const result = searchResultsReducer(state, action);

      expect(result).toEqual({
        ...state,
        total: payload.count,
        results: payload.results,
        isLoading: false
      });
    });
  });

  describe('GetSearchResultsFailureAction', () => {
    it('should set isLoading to false', () => {
      const action = new GetSearchResultsFailureAction(
        new HttpErrorResponse({})
      );
      const state: SearchResultsState = {
        ...initialSearchResultsState,
        isLoading: true
      };

      const result = searchResultsReducer(state, action);

      expect(result).toEqual({
        ...initialSearchResultsState,
        isLoading: false
      });
    });
  });
});
