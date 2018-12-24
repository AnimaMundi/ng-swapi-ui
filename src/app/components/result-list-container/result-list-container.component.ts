import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app';
import { Observable } from 'rxjs';

import { Person } from '@shared/models';
import {
  getIsSearchResultLoading,
  getSearchResult
} from '@store/search-results';

@Component({
  selector: 'app-result-list-container',
  templateUrl: './result-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListContainerComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public results$: Observable<Person[]>;

  constructor(private readonly store$: Store<AppState>) {}

  public ngOnInit(): void {
    this.isLoading$ = this.store$.pipe(select(getIsSearchResultLoading));
    this.results$ = this.store$.pipe(select(getSearchResult));
  }
}
