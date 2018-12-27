import {
  SearchResultsAction,
  SearchResultsActionType
} from './search-results.actions';
import {
  initialSearchResultsState,
  SearchResultsState
} from './search-results.state';

export const searchResultsReducer = (
  state = initialSearchResultsState,
  action: SearchResultsActionType
): SearchResultsState => {
  switch (action.type) {
    case SearchResultsAction.GetSearchResults:
      return {
        ...state,
        isLoading: true,
        prev: null,
        next: null
      };

    case SearchResultsAction.GetSearchResultsSuccess:
      return {
        ...state,
        isLoading: false,
        total: action.payload.count,
        results: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous,
        page: action.payload.page
      };

    case SearchResultsAction.GetSearchResultsFailure:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
