import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Detail</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
