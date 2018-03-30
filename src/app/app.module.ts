import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MyPortfolioComponent } from './portfolio/my-portfolio/my-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockSelectorComponent } from './portfolio/stock-selector/stock-selector.component';

@NgModule({
  declarations: [AppComponent, PortfolioComponent, MyPortfolioComponent, StockSelectorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
