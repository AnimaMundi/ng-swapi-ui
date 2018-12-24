import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { Person } from '@shared/models';
import { AppState } from '@store/app';
import {
  getIsSearchResultLoading,
  getSearchResult
} from '@store/search-results';
import { MockObservable, mockPerson, mockSelect, MockStore } from '@test';

import { ResultListContainerComponent } from './result-list-container.component';

const isLoading = false;
const searchResults = new Array(3).fill(mockPerson);

describe('ResultListContainerComponent', () => {
  let component: ResultListContainerComponent;
  let fixture: ComponentFixture<ResultListContainerComponent>;

  let mockStore: MockStore<AppState>;
  let isLoading$: MockObservable<boolean>;
  let searchResults$: MockObservable<Person[]>;

  beforeEach(() => {
    isLoading$ = new MockObservable(of(isLoading));
    searchResults$ = new MockObservable(of(searchResults));
    mockStore = new MockStore();
  });

  beforeEach(() => {
    mockSelect([
      {
        selector: getIsSearchResultLoading,
        source: isLoading$
      },
      {
        selector: getSearchResult,
        source: searchResults$
      }
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultListContainerComponent],
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
    fixture = TestBed.createComponent(ResultListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set streams', () => {
    expect(component.isLoading$).toEqual(isLoading$);
    expect(component.results$).toEqual(searchResults$);
  });
});
