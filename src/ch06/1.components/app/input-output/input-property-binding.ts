import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'order',
  template: 'Buying {{ quantity }} shares of {{ stockSymbol }}',
  styles: [':host { background: cyan; }']
})
class OrderComponent {
  @Input() stockSymbol: string;
  @Input() quantity: number;
}

@Component({
  selector: 'app',
  template: `<h1>App</h1>
             <input type="text" (input)="onInputEvent($event)" >
             <order [stockSymbol]="stock" [quantity]="100" ></order>`
})
class AppComponent {
  stock: string;

  onInputEvent({ target }): void {
    this.stock = target.value;
  }
}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, OrderComponent],
  bootstrap: [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
