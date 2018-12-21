import { SearchAction, SearchActionType } from './search.actions';
import { initialSearchState, SearchState } from './search.state';

export const searchReducer = (
  state = initialSearchState,
  action: SearchActionType
): SearchState => {
  switch (action.type) {
    case SearchAction.SearchQueryChanged:
      return {
        ...state,
        query: action.payload
      };

    default:
      return state;
  }
};
