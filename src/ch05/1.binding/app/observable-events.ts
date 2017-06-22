import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app',
  template: `
    <h1>Observable events</h1>
    <input type="text" [formControl]="searchInput">
  `
})
export class AppComponent {
  searchInput: FormControl = new FormControl('');

  constructor() {
    this.searchInput.valueChanges
        .debounceTime(500)
        .subscribe((stock)  => this.getStock(stock));
  }

  getStock(stock: string) {
    console.log(stock);
  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
