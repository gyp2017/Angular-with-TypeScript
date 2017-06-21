import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './components/app.component';
import ProductComponent from './components/product.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
