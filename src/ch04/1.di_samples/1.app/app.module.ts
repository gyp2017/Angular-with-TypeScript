import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './components/app.component';
import ProductComponent from './components/product.component';
import MockComponent from './components/mock.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductComponent, MockComponent],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
