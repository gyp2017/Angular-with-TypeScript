import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product',
  template: '<h1 class="product">Product Detail : {{ productID }}</h1>',
  styles: ['.product { background: cyan }']
})
export class ProductDetailParamComponent {
  productID: string;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
  }
}
