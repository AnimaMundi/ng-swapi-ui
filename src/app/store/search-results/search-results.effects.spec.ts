import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { marbles } from 'rxjs-marbles/jasmine';

import { PeopleApiResponse } from '@shared/models';
import { SwapiService } from '@shared/swapi';
import {
  MockActions,
  MockObservable,
  mockPerson,
  mockSelect,
  MockStore
} from '@test';

import { AppState } from '../app';
import {
  getSearchQuery,
  SearchActionType,
  SearchFormSubmittedAction
} from '../search';
import {
  GetSearchResultsAction,
  GetSearchResultsFailureAction,
  GetSearchResultsSuccessAction,
  SearchResultsActionType
} from './search-results.actions';
import { SearchResultEffects } from './search-results.effects';
import { getSearchResultPage } from './search-results.selectors';

const searchQuery = 'searchQuery';
const searchResultPage = 1;

describe('SearchResultsEffects', () => {
  let effects: SearchResultEffects;

  let mockActions: MockActions<SearchResultsActionType | SearchActionType>;
  let mockStore: MockStore<AppState>;
  let mockSwapiService: {
    getPeople: jasmine.Spy;
  };

  let mockSearchQuery$: MockObservable<string>;
  let mockSearchResultPage$: MockObservable<number>;

  beforeEach(() => {
    mockActions = new MockActions();
    mockStore = new MockStore();
    mockSwapiService = {
      getPeople: jasmine.createSpy('getPeople')
    };
  });

  beforeEach(() => {
    mockSearchQuery$ = new MockObservable(of(searchQuery));
    mockSearchResultPage$ = new MockObservable(of(searchResultPage));
  });

  beforeEach(() => {
    mockSelect([
      {
        selector: getSearchQuery,
        source: mockSearchQuery$
      },
      {
        selector: getSearchResultPage,
        source: mockSearchResultPage$
      }
    ]);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchResultEffects,
        {
          provide: Actions,
          useValue: mockActions
        },
        {
          provide: Store,
          useValue: mockStore
        },
        {
          provide: SwapiService,
          useValue: mockSwapiService
        }
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.get(SearchResultEffects);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  describe('triggerGetSearchResults$', () => {
    it(
      'should dispatch a GetSearchResultsAction',
      marbles(m => {
        const action = new SearchFormSubmittedAction();
        const completion = new GetSearchResultsAction();
        const expected = m.cold('c', { c: completion });

        mockActions.setSource(m.cold('a', { a: action }));

        m.expect(effects.triggerGetSearchResults$).toBeObservable(expected);
      })
    );
  });

  describe('getSearchResults$', () => {
    let action: GetSearchResultsAction;
    let res: PeopleApiResponse;

    beforeEach(() => {
      action = new GetSearchResultsAction();
      res = {
        count: 10,
        results: new Array(10).fill(mockPerson)
      };
    });

    it(
      'should search for people',
      marbles(m => {
        mockSwapiService.getPeople.and.returnValue(m.cold('r', { r: res }));
        mockActions.setSource(m.cold('a', { a: action }));

        effects.getSearchResults$.subscribe();
        m.flush();

        expect(mockSwapiService.getPeople).toHaveBeenCalledWith(
          searchQuery,
          searchResultPage
        );
      })
    );

    it(
      'should dispatch a GetSearchResultsSuccessAction on success',
      marbles(m => {
        const completion = new GetSearchResultsSuccessAction(res);
        const expected = m.cold('c', { c: completion });

        mockSwapiService.getPeople.and.returnValue(m.cold('r', { r: res }));
        mockActions.setSource(m.cold('a', { a: action }));

        m.expect(effects.getSearchResults$).toBeObservable(expected);
      })
    );

    it(
      'should dispatch a GetSearchResultsFailureAction on failure',
      marbles(m => {
        const err = new HttpErrorResponse({});
        const completion = new GetSearchResultsFailureAction(err);
        const expected = m.cold('c', { c: completion });

        mockSwapiService.getPeople.and.returnValue(m.cold('#', null, err));
        mockActions.setSource(m.cold('a', { a: action }));

        m.expect(effects.getSearchResults$).toBeObservable(expected);
      })
    );
  });
});
