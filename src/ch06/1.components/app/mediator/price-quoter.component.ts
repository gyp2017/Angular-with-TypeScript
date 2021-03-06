import { Component, Output, EventEmitter } from '@angular/core';
import { Stock } from './stock';

@Component({
  selector: 'price-quoter',
  template: `<button (click)="buyStrocks($event)">Buy</button>
             <strong>{{ stockSymbol }} {{ lastPrice | currency : 'USD' : true : '1.2-2' }}</strong>`,
  styles: [':host { background: pink; padding: 5px 15px }']
})
export class PriceQuoterComponent {
  @Output() buy: EventEmitter<Stock> = new EventEmitter();

  stockSymbol: string = 'IBM';
  lastPrice: number;

  constructor() {
    setInterval(() => {
      this.lastPrice = 100 * Math.random();
    }, 2000);
  }

  buyStrocks(event) {
    let stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buy.emit(stockToBuy)
  }
}
