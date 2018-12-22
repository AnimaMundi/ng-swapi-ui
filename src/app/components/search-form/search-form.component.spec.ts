import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DomHelper } from '@test';

import { SearchFormComponent } from './search-form.component';

const searchQuery = 'searchQuery';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let domHelper: DomHelper<SearchFormComponent>;

  const getSearchQueryInput = () =>
    domHelper.findByCss<HTMLInputElement>('[name=searchQuery]');

  const getSearchButton = () =>
    domHelper.findByCss<HTMLButtonElement>('[type=submit]');

  const getSearchForm = () =>
    domHelper.findByCss<HTMLFormElement>('form.search-form');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SearchFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    domHelper = new DomHelper(fixture);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchQuery', () => {
    it('should set the value of the search input', () => {
      component.searchQuery = searchQuery;
      fixture.detectChanges();

      const searchQueryInput = getSearchQueryInput();
      expect(searchQueryInput.value).toEqual(searchQuery);
    });

    it('should not emit changes', () => {
      const onSearchQueryChangedSpy = jasmine.createSpy('onSearchQueryChanged');
      component.searchQueryChange.subscribe(onSearchQueryChangedSpy);
      component.searchQuery = searchQuery;
      fixture.detectChanges();

      expect(onSearchQueryChangedSpy).not.toHaveBeenCalled();
    });
  });

  describe('searchQueryChange', () => {
    it('should emit the value of the search input when it changes', () => {
      const onSearchQueryChangedSpy = jasmine.createSpy('onSearchQueryChanged');
      component.searchQueryChange.subscribe(onSearchQueryChangedSpy);
      const searchQueryInput = getSearchQueryInput();
      domHelper.setInputValue(searchQueryInput, searchQuery);
      fixture.detectChanges();

      expect(onSearchQueryChangedSpy).toHaveBeenCalledWith(searchQuery);
    });
  });

  describe('searchFormSubmit', () => {
    let onSearchFormSubmittedSpy: jasmine.Spy;

    beforeEach(() => {
      onSearchFormSubmittedSpy = jasmine.createSpy('onSearchFormSubmitted');
      component.searchFormSubmit.subscribe(onSearchFormSubmittedSpy);
    });

    it('should emit when the form is submitted', () => {
      const form = getSearchForm();
      form.dispatchEvent(new Event('ngSubmit'));
      fixture.detectChanges();

      expect(onSearchFormSubmittedSpy).toHaveBeenCalled();
    });

    it('should emit when the search button is clicked', () => {
      const searchButton = getSearchButton();
      searchButton.click();
      fixture.detectChanges();

      expect(onSearchFormSubmittedSpy).toHaveBeenCalled();
    });
  });
});
