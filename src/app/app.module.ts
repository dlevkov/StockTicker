import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { OrderModule } from 'ngx-order-pipe';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MyPortfolioComponent } from './portfolio/my-portfolio/my-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DataProviderService } from './portfolio/stock-selector/data-provider.service';
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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    OrderModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
