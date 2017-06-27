import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app',
  providers: [ProductService],
  template: `
    <h1>Find Products By ID Using ProductService</h1>
    <form #f="ngForm" (submit)="getProductByID(f.value)">
      <label for="productID">Enter Product ID</label>
      <input id="productID" type="number" name="productID" ngModel>
      <button type="submit">Find Product</button>
    </form>
    <h2>{{ productTitle }} {{ productPrice }}</h2>
  `
})
class AppComponent {
  productTitle: string;
  productPrice: string;

  constructor(private productService: ProductService) {}

  getProductByID(formValue) {
    this.productService.getProductByID(formValue.productID)
                       .subscribe(
                         data => {
                           this.productTitle = data.title;
                           this.productPrice = '$' + data.price;
                         },
                         err => console.log(`Can't get products. Error code: ${err.status}, URL: ${err.url}`),
                         () => console.log('Done')
                       );
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
