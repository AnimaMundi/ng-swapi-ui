import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HeightModule } from '@shared/height';
import { WeightModule } from '@shared/weight';

import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import {
  ContentWrapperComponent,
  HeaderComponent,
  ResultListComponent,
  ResultListContainerComponent,
  SearchFormComponent,
  SearchFormContainerComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppStoreModule,
    HeightModule,
    WeightModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultListComponent,
    ResultListContainerComponent,
    ContentWrapperComponent,
    SearchFormComponent,
    SearchFormContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
