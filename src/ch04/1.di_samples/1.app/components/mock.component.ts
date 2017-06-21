import { Component } from '@angular/core';
import { Product } from '../services/i.product.service';
import { ProductService } from '../services/product.service';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'di-product-2',
  template: `<h1>Product Detail</h1>
             <h2>Title : {{ product.title }}</h2>
             <h2>Description : {{ product.description }}</h2>
             <h2>Price : {{ product.price }}</h2>`,
  providers: [{ provide: ProductService, useClass: MockService }]
})
export default class MockComponent {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}
