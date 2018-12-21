import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { AppState } from '@store/app';
import { SearchQueryChangedAction } from '@store/search';
import { mockStore } from '@test';

import { SearchFormContainerComponent } from './search-form-container.component';

const searchQuery = 'searchQuery';

describe('SearchFormContainerComponent', () => {
  let component: SearchFormContainerComponent;
  let fixture: ComponentFixture<SearchFormContainerComponent>;
  let store$: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [SearchFormContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormContainerComponent);
    component = fixture.componentInstance;

    store$ = TestBed.get(Store);
    mockStore(store$);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSearchQueryChanged', () => {
    it('should dispatch a SearchQueryChangedAction', () => {
      component.onSearchQueryChanged(searchQuery);

      expect(store$.dispatch).toHaveBeenCalledWith(
        new SearchQueryChangedAction(searchQuery)
      );
    });
  });
});
