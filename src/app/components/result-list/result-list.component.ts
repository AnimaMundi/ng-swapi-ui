import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Person } from '@shared/models';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent {
  @Input() public isLoading: boolean;
  @Input() public results: Person[];
}
