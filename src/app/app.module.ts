import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhSearchEngineComponent } from './gh-search-engine/gh-search-engine.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsGridComponent } from './results-grid/results-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GhSearchEngineComponent,
    ResultsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
