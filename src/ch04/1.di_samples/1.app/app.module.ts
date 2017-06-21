import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './components/app.component';
import ProductComponent from './components/product.component';
import { ProductService } from './services/product.service'; 

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductComponent],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
