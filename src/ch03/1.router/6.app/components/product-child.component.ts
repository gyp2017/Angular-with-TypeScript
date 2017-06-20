import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail : {{ productID }}</h1>
             <router-outlet></router-outlet>
             <p><a [routerLink]="['./seller', 5678]">Seller Info</a></p>
             `,
  styles: ['.product { background: cyan }']
})
export class ProductChildComponent {
  productID: string;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
  }
}
