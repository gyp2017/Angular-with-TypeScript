import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="[{ outlets: { primary: 'home', aux: 'chat' } }]">Open Chat</a>
    <a [routerLink]="[{ outlets: { aux: null } }]">Close Chat</a>
    <router-outlet></router-outlet>
    <router-outlet name="aux"></router-outlet>
  `
})
export class AppComponent { }
