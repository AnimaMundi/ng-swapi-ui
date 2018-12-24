import { Action } from '@ngrx/store';

import { AppState } from '@store/app';

import { mockPerson } from './mock-data';

export const mockState: AppState = {
  search: {
    query: 'searchQuery'
  },
  searchResults: {
    isLoading: false,
    page: 1,
    results: [mockPerson],
    total: 1
  }
};

export const mockReducer = (state = mockState, _action: Action): AppState =>
  state;
