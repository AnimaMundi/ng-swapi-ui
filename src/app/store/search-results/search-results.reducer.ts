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
        isLoading: true
      };

    case SearchResultsAction.GetSearchResultsSuccess:
      return {
        ...state,
        isLoading: false,
        total: action.payload.count,
        results: action.payload.results
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
