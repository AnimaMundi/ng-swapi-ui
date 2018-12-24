import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { AppState } from '@store/app';
import { mockReducer, mockStore } from '@test';

import { ResultListContainerComponent } from './result-list-container.component';

describe('ResultListContainerComponent', () => {
  let component: ResultListContainerComponent;
  let fixture: ComponentFixture<ResultListContainerComponent>;
  let store$: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(mockReducer)],
      declarations: [ResultListContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListContainerComponent);
    component = fixture.componentInstance;

    store$ = TestBed.get(Store);
    mockStore(store$);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
