import { MemoizedSelector } from '@ngrx/store';
import * as ngrx from '@ngrx/store';
import { EMPTY } from 'rxjs';

import { MockObservable } from './mock-observable';

export interface SelectorSourcePair<T, U> {
  selector: MemoizedSelector<T, U>;
  source: MockObservable<U>;
}

export const mockSelect = <T>(
  selectorSourcePairs: Array<SelectorSourcePair<T, unknown>>
) => {
  spyOnProperty(ngrx, 'select').and.callFake(
    () => (selector: MemoizedSelector<T, unknown>) => {
      for (const pair of selectorSourcePairs) {
        if (pair.selector === selector) {
          return () => pair.source;
        }
      }

      return () => EMPTY;
    }
  );
};
