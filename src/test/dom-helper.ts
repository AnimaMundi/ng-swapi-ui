import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { isArray, isNil, prop } from '@shared/utils';

export class DomHelper<T> {
  private get debugElement(): DebugElement {
    return this.fixture.debugElement;
  }

  constructor(private readonly fixture: ComponentFixture<T>) {}

  public findByCss<U = HTMLElement>(cssSelector: string): U {
    const debugElement = this.debugElement.query(By.css(cssSelector));
    return isNil(debugElement) ? null : debugElement.nativeElement;
  }

  public findAllByCss<U = HTMLElement>(cssSelector: string): U[] {
    const debugElements = this.debugElement.queryAll(By.css(cssSelector));
    return isArray(debugElements)
      ? debugElements.map(prop('nativeElement'))
      : [];
  }

  public collapseWhitespace(textContent: string): string {
    return textContent.replace(/\s+/g, ' ').trim();
  }

  public setInputValue(inputElement: HTMLInputElement, value: string): void {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
  }
}
