import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailParamComponent } from './components/product-param.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailParamComponent }
];

export const routing = RouterModule.forRoot(routes);
