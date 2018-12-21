import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  @Input()
  public set searchQuery(searchQuery: string) {
    this.searchQueryFormControl.setValue(searchQuery, { emitEvent: false });
  }
  @Output() public searchQueryChange = new EventEmitter<string>();

  public searchQueryFormControl = new FormControl('');

  private destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.searchQueryFormControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.searchQueryChange.emit(value);
      });
  }
}
