import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { AppState } from '@store/app';
import {
  getSearchQuery,
  SearchFormSubmittedAction,
  SearchQueryChangedAction
} from '@store/search';
import { MockObservable, mockSelect, MockStore } from '@test';

import { SearchFormContainerComponent } from './search-form-container.component';

const searchQuery = 'searchQuery';

describe('SearchFormContainerComponent', () => {
  let component: SearchFormContainerComponent;
  let fixture: ComponentFixture<SearchFormContainerComponent>;

  let mockStore: MockStore<AppState>;
  let searchQuery$: MockObservable<string>;

  beforeEach(() => {
    searchQuery$ = new MockObservable(of(searchQuery));
    mockStore = new MockStore();
  });

  beforeEach(() => {
    mockSelect([
      {
        selector: getSearchQuery,
        source: searchQuery$
      }
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: Store,
          useValue: mockStore
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set streams', () => {
    expect(component.searchQuery$).toEqual(searchQuery$);
  });

  describe('onSearchQueryChanged', () => {
    it('should dispatch a SearchQueryChangedAction', () => {
      component.onSearchQueryChanged(searchQuery);

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new SearchQueryChangedAction(searchQuery)
      );
    });
  });

  describe('onSearchFormSubmitted', () => {
    it('should dispatch a SearchFormSubmittedAction', () => {
      component.onSearchFormSubmitted();

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new SearchFormSubmittedAction()
      );
    });
  });
});
