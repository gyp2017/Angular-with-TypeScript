import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail : {{ productID }}</h1>
             <h2>Is prod evnironment? : {{ isProdEnvironment }}</h2>`,
  styles: ['.product { background: cyan }']
})
export class ProductDetailParamDataComponent {
  productID: string;
  isProdEnvironment: string;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
    this.isProdEnvironment = route.snapshot.data[0]['isProd'];

    console.log(`this.isProdEnvironment : ${this.isProdEnvironment}`);
  }
}
