import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { LuxuryModule } from './luxury.module';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    LuxuryModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
