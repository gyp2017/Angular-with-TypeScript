import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: 'luxury', loadChildren: '10.app/components/luxury/luxury.lazy.module' }
];

export const routing = RouterModule.forRoot(routes);
