import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenderIconPipe } from './gender-icon.pipe';

@NgModule({
  declarations: [GenderIconPipe],
  imports: [CommonModule],
  exports: [GenderIconPipe]
})
export class GenderIconModule {}
