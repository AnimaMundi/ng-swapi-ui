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
    total: 1,
    prev: null,
    next: null
  }
};
