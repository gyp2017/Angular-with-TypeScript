import { Component } from "@angular/core";

@Component({
  selector: 'app',
  template: `
    <h1>Weather Application</h1>
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['weather']">Weather</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
