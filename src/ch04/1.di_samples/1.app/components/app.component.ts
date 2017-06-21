import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>Basic Dependency Injection Sample</h1>
             <hr>
             <di-product-1></di-product-1>
             <hr>
             <di-product-2></di-product-2>`
})
export default class AppComponent { }
