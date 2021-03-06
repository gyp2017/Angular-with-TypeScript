import { Component } from '@angular/core';
import { Product } from '../services/i.product.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'di-product-1',
  template: `<h1>Product Detail</h1>
             <h2>Title : {{ product.title }}</h2>
             <h2>Description : {{ product.description }}</h2>
             <h2>Price : {{ product.price }}</h2>`
})
export default class ProductComponent {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}
