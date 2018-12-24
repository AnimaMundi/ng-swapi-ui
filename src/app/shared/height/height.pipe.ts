import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {
  constructor(private readonly decimalPipe: DecimalPipe) {}

  public transform(value: number): string {
    return `${this.decimalPipe.transform(value)} cm`;
  }
}
