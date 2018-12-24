import { EMPTY, Observable } from 'rxjs';

export class MockObservable<T> extends Observable<T> {
  constructor(source: Observable<T> = EMPTY) {
    super();

    this.setSource(source);
  }

  public setSource(source: Observable<T>) {
    this.source = source;
  }
}
