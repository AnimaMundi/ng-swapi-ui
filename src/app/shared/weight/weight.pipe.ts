import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {
  constructor(private readonly decimalPipe: DecimalPipe) {}

  public transform(value: number): string {
    return `${this.decimalPipe.transform(value)} kg`;
  }
}
