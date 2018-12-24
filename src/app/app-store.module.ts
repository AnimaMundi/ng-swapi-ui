import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env';
import { appReducer } from '@store/app';
import { SearchResultEffects } from '@store/search-results';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([SearchResultEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppStoreModule {}
