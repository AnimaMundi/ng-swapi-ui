import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomHelper } from '@test';

import { PaginationControlsComponent } from './pagination-controls.component';

describe('PaginationControlsComponent', () => {
  let component: PaginationControlsComponent;
  let fixture: ComponentFixture<PaginationControlsComponent>;
  let domHelper: DomHelper<PaginationControlsComponent>;

  const getPrevBtn = () =>
    domHelper.findByCss<HTMLButtonElement>('#pagination-controls__btn-prev');

  const getNextBtn = () =>
    domHelper.findByCss<HTMLButtonElement>('#pagination-controls__btn-next');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationControlsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationControlsComponent);
    domHelper = new DomHelper(fixture);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit a prevClick event when the prev button is clicked', () => {
    component.prev = 'prev';
    fixture.detectChanges();

    const prevClickSpy = jasmine.createSpy('prevClick');
    component.prevClick.subscribe(prevClickSpy);

    const prevBtn = getPrevBtn();
    prevBtn.click();

    expect(prevClickSpy).toHaveBeenCalled();
  });

  it('should emit a nextClick event when the next button is clicked', () => {
    component.next = 'next';
    fixture.detectChanges();

    const nextClickSpy = jasmine.createSpy('nextClick');
    component.nextClick.subscribe(nextClickSpy);

    const nextBtn = getNextBtn();
    nextBtn.click();

    expect(nextClickSpy).toHaveBeenCalled();
  });

  it('should not show the prev buton when the prev input is null', () => {
    component.prev = null;
    fixture.detectChanges();

    const prevBtn = getPrevBtn();

    expect(prevBtn).toBeNull();
  });

  it('should not show the next button when the next input is null', () => {
    component.next = null;
    fixture.detectChanges();

    const nextBtn = getNextBtn();

    expect(nextBtn).toBeNull();
  });
});
