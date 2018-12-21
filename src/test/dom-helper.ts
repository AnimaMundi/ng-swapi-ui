import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DomHelper<T> {
  private get debugElement(): DebugElement {
    return this.fixture.debugElement;
  }

  constructor(private readonly fixture: ComponentFixture<T>) {}

  public findByCss<U = HTMLElement>(cssSelector: string): U {
    return this.debugElement.query(By.css(cssSelector)).nativeElement;
  }

  public collapseWhitespace(textContent: string): string {
    return textContent.replace(/\s+/g, ' ').trim();
  }

  public setInputValue(inputElement: HTMLInputElement, value: string): void {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
  }
}
