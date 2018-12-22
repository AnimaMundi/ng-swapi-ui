import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentWrapperComponent {}
