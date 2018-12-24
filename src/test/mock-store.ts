import { MockObservable } from './mock-observable';

export class MockStore<T> extends MockObservable<T> {
  public dispatch = jasmine.createSpy('dispatch');
}
