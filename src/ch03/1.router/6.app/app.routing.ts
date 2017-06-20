import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductChildComponent } from './components/product-child.component';
import { ProductDescriptionComponent } from './components/product-description.component';
import { SellerInfoComponent } from './components/seller-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product/:id',
    component: ProductChildComponent,
    children: [
      { path: '', component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
