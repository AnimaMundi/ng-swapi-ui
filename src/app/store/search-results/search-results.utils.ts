import { Person, SearchResultsMeta } from '@shared/models';

import { RESULTS_PER_PAGE } from './search-results.constants';

export const calculateSearchResultMeta = (
  total: number,
  resultsCount: number,
  page: number
): SearchResultsMeta => {
  const lower = (page - 1) * RESULTS_PER_PAGE + 1;

  return {
    total,
    visible: {
      lower: resultsCount > 0 ? lower : 0,
      upper: lower + resultsCount - 1
    }
  };
};

export const calculateSearchResultCount = (results: Person[]) => results.length;
