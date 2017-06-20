import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { _404Component } from './components/404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: '**', component: _404Component }
];

export const routing = RouterModule.forRoot(routes);
