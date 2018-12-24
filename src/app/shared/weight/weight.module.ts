import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeightPipe } from './weight.pipe';

@NgModule({
  declarations: [WeightPipe],
  imports: [CommonModule],
  providers: [DecimalPipe],
  exports: [WeightPipe]
})
export class WeightModule {}
