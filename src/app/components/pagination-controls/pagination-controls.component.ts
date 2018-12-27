import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent {
  @Input() public next: string;
  @Input() public prev: string;

  @Output() public nextClick = new EventEmitter<void>();
  @Output() public prevClick = new EventEmitter<void>();

  public onNextClicked(): void {
    this.nextClick.emit();
  }

  public onPrevClicked(): void {
    this.prevClick.emit();
  }
}
