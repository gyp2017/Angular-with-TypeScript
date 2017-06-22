import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  template: `
    <h1>Binding</h1>
    <input [(ngModel)]="lastStock">
    <p>{{ lastStock }}</p>
  `
})
export class AppComponent {
  lastStock: string;

  constructor() {
    setTimeout(() => {
      this.lastStock = 'AAPL';
    }, 2000);
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
