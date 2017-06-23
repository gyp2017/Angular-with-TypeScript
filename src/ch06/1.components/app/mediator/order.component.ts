import { Component, Input } from '@angular/core';
import { Stock } from './stock';

@Component({
  selector: 'order-processor',
  template: `{{ message }}`,
  styles: [':host { background: cyan; padding: 5px 15px }']
})
export class OrderComponent {
  message: string = 'Waiting ....';
  private _stock: Stock;

  @Input() set stock(value: Stock) {
    if (value && value.bidPrice != undefined) {
      this.message = `${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
    }
  }

  get stock(): Stock {
    return this._stock;
  }
}
