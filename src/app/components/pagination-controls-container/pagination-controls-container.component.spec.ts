import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { AppState } from '@store/app';
import { NextPageClickedAction, PrevPageClickedAction } from '@store/search';
import { getNextResultPage, getPrevResultPage } from '@store/search-results';
import { MockObservable, mockSelect, MockStore } from '@test';

import { PaginationControlsContainerComponent } from './pagination-controls-container.component';

const prev = 'prev';
const next = 'next';

describe('PaginationControlsContainerComponent', () => {
  let component: PaginationControlsContainerComponent;
  let fixture: ComponentFixture<PaginationControlsContainerComponent>;

  let mockStore: MockStore<AppState>;
  let prev$: MockObservable<string>;
  let next$: MockObservable<string>;

  beforeEach(() => {
    prev$ = new MockObservable(of(prev));
    next$ = new MockObservable(of(next));
    mockStore = new MockStore();
  });

  beforeEach(() => {
    mockSelect([
      {
        selector: getPrevResultPage,
        source: prev$
      },
      {
        selector: getNextResultPage,
        source: next$
      }
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationControlsContainerComponent],
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
    fixture = TestBed.createComponent(PaginationControlsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set streams', () => {
    expect(component.prev$).toEqual(prev$);
    expect(component.next$).toEqual(next$);
  });

  describe('onPrevClicked', () => {
    it('should dispatch a PrevPageClickedAction', () => {
      component.onPrevClicked();

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new PrevPageClickedAction()
      );
    });
  });

  describe('onNextClicked', () => {
    it('should dispatch a nextPageClickedAction', () => {
      component.onNextClicked();

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new NextPageClickedAction()
      );
    });
  });
});
