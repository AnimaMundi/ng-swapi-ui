import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ContentWrapperComponent,
  SearchFormComponent,
  SearchFormContainerComponent
} from './components';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

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
    ListComponent,
    ContentWrapperComponent,
    SearchFormComponent,
    SearchFormContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
