import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  getProductByID(productID: string): Observable {
    return this.http.get(`/products/${productID}`)
             .map(res => res.json());
  }
}
