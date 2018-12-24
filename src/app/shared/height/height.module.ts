import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeightPipe } from './height.pipe';

@NgModule({
  declarations: [HeightPipe],
  imports: [CommonModule],
  providers: [DecimalPipe],
  exports: [HeightPipe]
})
export class HeightModule {}
