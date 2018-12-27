import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderIconModule } from '@shared/gender-icon';
import { HeightModule } from '@shared/height';
import { WeightModule } from '@shared/weight';
import { DomHelper, mockPerson } from '@test';

import { ResultListComponent } from './result-list.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;
  let domHelper: DomHelper<ResultListComponent>;

  const getLoadingElement = () => domHelper.findByCss('#result-list__loader');

  const getResultElements = () => domHelper.findAllByCss('.list__item');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeightModule, WeightModule, GenderIconModule],
      declarations: [ResultListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    domHelper = new DomHelper(fixture);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    component.isLoading = false;
    component.results = [];
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show the loading element while results are loading', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const loadingElement = getLoadingElement();
    expect(loadingElement).toBeTruthy();
  });

  it('should not show the loading element when results are finished loading', () => {
    component.isLoading = false;
    fixture.detectChanges();

    const loadingElement = getLoadingElement();
    expect(loadingElement).not.toBeTruthy();
  });

  it('should not show results elements if no results were loaded', () => {
    component.isLoading = false;
    component.results = [];
    fixture.detectChanges();

    const resultElements = getResultElements();
    expect(resultElements.length).toEqual(0);
  });

  it('should not show results elements while results are loading', () => {
    component.isLoading = true;
    component.results = [mockPerson];
    fixture.detectChanges();

    const resultElements = getResultElements();
    expect(resultElements.length).toEqual(0);
  });

  it('should show a result element for each loaded result', () => {
    component.isLoading = false;
    component.results = [mockPerson, mockPerson];
    fixture.detectChanges();

    const resultElements = getResultElements();
    expect(resultElements.length).toEqual(2);
  });
});
