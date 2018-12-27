import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/app';
import { NextPageClickedAction, PrevPageClickedAction } from '@store/search';
import { getNextResultPage, getPrevResultPage } from '@store/search-results';

@Component({
  selector: 'app-pagination-controls-container',
  templateUrl: './pagination-controls-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationControlsContainerComponent implements OnInit {
  public next$: Observable<string>;
  public prev$: Observable<string>;

  constructor(private readonly store$: Store<AppState>) {}

  public ngOnInit(): void {
    this.next$ = this.store$.pipe(select(getNextResultPage));
    this.prev$ = this.store$.pipe(select(getPrevResultPage));
  }

  public onPrevClicked(): void {
    this.store$.dispatch(new PrevPageClickedAction());
  }

  public onNextClicked(): void {
    this.store$.dispatch(new NextPageClickedAction());
  }
}
