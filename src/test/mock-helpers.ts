import { Store } from '@ngrx/store';

export const mockStore = <T>(store$: Store<T>) => {
  spyOn(store$, 'dispatch').and.callThrough();
  spyOn(store$, 'pipe').and.callThrough();
};
