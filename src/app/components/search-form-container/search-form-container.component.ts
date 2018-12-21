import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/app';
import { getSearchQuery, SearchQueryChangedAction } from '@store/search';

@Component({
  selector: 'app-search-form-container',
  templateUrl: './search-form-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormContainerComponent implements OnInit {
  public searchQuery$: Observable<string>;

  constructor(private readonly store$: Store<AppState>) {}

  public ngOnInit(): void {
    this.searchQuery$ = this.store$.pipe(select(getSearchQuery));
  }

  public onSearchQueryChanged(searchQuery: string): void {
    this.store$.dispatch(new SearchQueryChangedAction(searchQuery));
  }
}
