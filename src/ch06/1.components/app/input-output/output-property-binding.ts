import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

interface IPriceQuote {
  stockSymbol: string;
  lastPrice: number;
}

@Component({
  selector: 'price-quoter',
  template: `<strong> {{ stockSymbol }} {{ price | currency : 'USD' : true : '1.2-2' }}</strong>`,
  styles: [':host { background: pink; }']
})
class PriceQuoterComponent {
  @Output() lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();
  stockSymbol: string = 'IBM';
  price: number;

  constructor() {
    setInterval(() => {
      let priceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100 * Math.random()
      };

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);
    }, 1000)
  }
}

@Component({
  selector: 'app',
  template: `<h1>App</h1>
             <price-quoter (lastPrice)="priceQuoterHandler($event)"></price-quoter>
             <p>{{ stockSymbol }} {{ price | currency : 'USD' : true : '1.2-2' }}</p>`
})
class AppComponent {
  stockSymbol: string;
  price: number;

  priceQuoterHandler(event: IPriceQuote): void {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
  }
}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PriceQuoterComponent],
  bootstrap: [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
