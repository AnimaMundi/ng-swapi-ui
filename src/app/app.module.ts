import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ContentWrapperComponent,
  HeaderComponent,
  ResultListComponent,
  ResultListContainerComponent,
  SearchFormComponent,
  SearchFormContainerComponent
} from './components';

import { AppStoreModule } from './app-store.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppStoreModule
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
